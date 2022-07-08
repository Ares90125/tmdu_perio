<?php

namespace App\Http\Controllers;

use App\Models\Notifications;
use App\Models\Users;
use App\Models\Data;
use App\Models\Breshtimes;
use Carbon\Carbon;
use Illuminate\Support\Facades\Http;
use Illuminate\Support\Facades\DB;
use Illuminate\Http\Request;

class LineController extends Controller
{
    protected $channel_access_token;
    protected $channel_secret;
    public function __construct()
    {
        $this->channel_access_token== env('LINE_TOKEN');
        $this->channel_secret== env('LINE_SECRET');
    }
    public function SearchTWMessages(){
        $users=Users::get();
        foreach($users as $user){
            if($user->LineId=="0"){
                continue;
            }
            $userID = $user->LineId;
            $selfcheckday = Carbon::parse(now())->diffInDays(Carbon::parse(strtotime(substr($user->created_at,0,10))))%7;
            if($selfcheckday>6&&(($selfcheckday%7)==6)){
                $this->pushmessages($userID,"明日はセルフ検査日です。忘れずにセルフ検査を行いましょう。");
            }
        }
    }
    public function SearchEIMessages(){
        $users=Users::get();
        foreach($users as $user){
            if($user->LineId=="0"){
                continue;
            }
            $userID = $user->LineId;
            $selfcheckday = Carbon::parse(now())->diffInDays(Carbon::parse(strtotime(substr($user->created_at,0,10))))%7;
            if($selfcheckday>6&&(($selfcheckday%7)==0)){
                $this->pushmessages($userID,"セルフ検査実施日です。忘れずにセルフ検査を行いましょう。");
            }else if($selfcheckday>6&&(($selfcheckday%7)==1)){
                $this->pushmessages($userID,"昨日はセルフ検査を忘れてしまいましたか？忘れてしまった場合は、今日は忘れずに行いましょう。検査をして結果を記録していない場合は、検査結果を記録しましょう。");
            }
            $count=Data::Where([
                'userid'  => $user->id,
                'date'  => date('Y-m-d', strtotime('-1 day')),
                "type"  => 2,
            ])->count();
            $this->pushmessages($userID,"昨日のあなたの歯磨き回数は".$count."回でした。");
        }
    }
    public function SearchEVMessages(){
        $users=Users::get();
        foreach($users as $user){
            if($user->LineId=="0"){
                continue;
            }
            $userID = $user->LineId;
            $time=date('H:m:s');
            $startbreshtime=Breshtimes::where([
                ['userid',"=",$user->id],
                ["time","<=",$time]
            ])->orderby("time","DESC")->first();
            if($startbreshtime){
                $startbreshtime=$startbreshtime['time'];
                $isinvitevbreshcount=Notifications::Where([
                    ['userid',"=",$user->id],
                    ['date' ,"=", date('Y-m-d')],
                    ["time","<=",$time],
                    ["time",">=",$startbreshtime],
                    ["type","=","1"]
                ])->first();
                if(!$isinvitevbreshcount&&(strtotime($time)-strtotime($startbreshtime)<=600000)){
                    $this->pushmessages($userID,"歯磨きは終わりましたか？忘れずに歯磨き記録を入力しましょう。");
                }
            }
        }
        DB::table('test')->delete();
    }
    public function pushmessages($userID, $message){
        $httpClient = new \LINE\LINEBot\HTTPClient\CurlHTTPClient($this->channel_access_token);
        $bot = new \LINE\LINEBot($httpClient, ['channelSecret' => $this->channel_secret]);
        $textMessageBuilder = new \LINE\LINEBot\MessageBuilder\TextMessageBuilder($message);
        $response = $bot->pushMessage($userID, $textMessageBuilder);
    }
    public function getuserid(Request $request){
        $code=$request['code'];
        $response = Http::post('https://api.line.me/oauth2/v2.1/token', [
            'form_params' => [
                'grant_type' => 'authorization_code',
                'code' => $code,
                'redirect_uri' => 'http://tmdu-crpe22.doctorbook-dev.jp/api/linelogin',
                'client_id' => '1657281804',
                'client_secret' => 'f1c8db23ace8553aa78b7d9a0d8c672b',
            ]
        ]);
        $response1=Http::post('https://api.line.me/oauth2/v2.1/verify', [
            'form_params' => [
                'id_token' => $response['id_token'],
                'client_id' => '1657281804',
            ]
        ]);
        $update[''] =$request["state"];
        $data=Users::Where([
            'LineId'  => $update["id"],
        ])->update($update);
    }
}