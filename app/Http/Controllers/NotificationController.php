<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Notifications;
use App\Models\Data;
use App\Models\Breshtimes;
use Carbon\Carbon;

class NotificationController extends Controller
{
    //
    public function createbreshtime(Request $request){
        $user = auth()->user();
        $breshtime=new Breshtimes;
        $breshtime["userid"]=$user->id;
        $breshtime["time"]=$request['time'];
        $breshtime->save();
        return response()->json([
            'success'   =>  true,
        ]);
    }
    public function updatebreshtime(Request $request){
        $update['time']=$request['time'];
        $data=Breshtimes::Where([
            'id'  => $request["id"],
        ])->update($update);
        return response()->json([
            'success'   =>  true,
        ]);
    }
    public function deletebreshtime(Request $request){
        $delete['id']=$request['id'];
        $data=Breshtimes::Where([
            'id'  => $delete["id"],
        ])->delete();
        return response()->json([
            'success'   =>  true,
        ]);
    }
    public function loadbreshtime(Request $request){
        $user = auth()->user();
        $data=Breshtimes::Where([
            'userid'  => $user->id,
        ])->select('id',"time")->orderBy('time')->get();
        return response()->json([
            'success'   =>  true,
            'data'      =>  [
                $data
            ]
        ]);
    }
    public function notification(Request $request){
        $user = auth()->user();
        $date = strtotime($request["date"]);
        $time=$request["time"];
        $startbreshtime=Breshtimes::where([
            ['userid',"=",$user->id],
            ["time","<=",$time]
        ])->orderby("time","DESC")->first();
        if($startbreshtime){
            $startbreshtime=$startbreshtime['time'];
            $isinvitevbreshcount=Notifications::Where([
                ['userid',"=",$user->id],
                ['date' ,"=", date('Y-m-d',$date)],
                ["time","<=",$time],
                ["time",">=",$startbreshtime]
            ])->first();
            if(!$isinvitevbreshcount){
                $currentbresh=Data::Where([
                    ['userid',"=",$user->id],
                    ['date' ,"=", date('Y-m-d',$date)],
                    ["time","<=",$time],
                    ["time",">=",$startbreshtime],
                    ["type","=",2]
                ])->first();
                if(!$currentbresh){
                    $breshnoti=new Notifications;
                    $breshnoti['date'] =$request["date"];
                    $breshnoti['time']=$time;
                    $breshnoti['userid']=$user->id;
                    $breshnoti["type"]=2;
                    $breshnoti->save();
                }
            }
        }
        // return response()->json([
        //     'success'   =>  true,
        //     'value' =>[
        //         $currentbresh
        //     ]
        // ]);
        $isinvitevbreshcount=Notifications::Where([
            'userid'  => $user->id,
            'date'  => date('Y-m-d',$date),
            'type' =>"1"
        ])->first();
        if(!$isinvitevbreshcount){
            $count=Data::Where([
                'userid'  => $user->id,
                'date'  => date('Y-m-d', strtotime('-1 day', $date)),
                "type"  => 2,
            ])->count();
            $breshcout=new Notifications;
            $breshcout['date'] =$request["date"];
            $breshcout['time']=$time;
            $breshcout['userid']=$user->id;
            $breshcout["type"]=1;
            $breshcout["value"]=$count;
            $breshcout->save();
        }
        // return response()->json([
        //     'success'   =>  true,
        //     'value' =>[
        //         substr($user->created_at,0,10)
        //     ]
        // ]);
        $selfcheckday = Carbon::parse($date)->diffInDays(Carbon::parse(strtotime(substr($user->created_at,0,10))))%7;
        if($selfcheckday==0){
            $isinvitevbreshcount=Notifications::Where([
                'userid'  => $user->id,
                'date'  => date('Y-m-d',$date),
                'type' =>"3"
            ])->first();
        }
        else if($selfcheckday==1){

        }
        return response()->json([
            'success'   =>  true,
            'value' =>[
                $selfcheckday
            ]
        ]);
        $count=Notifications::Where([
            'userid'  => $user->id,
            "visited"  => false,
        ])->count();
        $notifications=Notifications::Where([
            'userid'  =>$user->id,
        ])->select('id','date',"time","type","value","visited")->orderBy('date')->orderBy('time')->paginate(6);
        return response()->json([
            'success'   =>  true,
            'count'      =>  [
                $count
            ],
            'value' =>[
                $notifications
            ]
        ]);
    }
}
