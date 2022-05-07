<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Requests\DataRequest;
use App\Models\Data;

class DataController extends Controller
{
    public function create(DataRequest $request){
        $user = auth()->user();
        $req=$request->validated();
        // return response()->json(['messsage' => $req["time"]], 200);

        $data=new Data;
        $data->userid=$user->id;
        $data->date=$req['date'];
        $data->time=$req['time'];
        $data->type=$req['type'];
        if (!empty($req['value'])){
            $data->value=$req['value'];
        }
        $data->save();
        return response()->json([
            'success'   =>  true,
            'data'      =>  [
            ]
        ]);
    }
    public function createsleep(Request $req){
        $user = auth()->user();
        // return response()->json(['messsage' => $req], 200);
        $data1=new Data;
        $data1->userid=$user->id;
        $data1->date=$req['update'];
        $data1->time=$req['time2'];
        $data1->type=1;
        $data1->value=$req['value'];
        $data1->save();
        $data2=new Data;
        $data2->userid=$user->id;
        $data2->date=$req['date'];
        $data2->time=$req['time1'];
        $data2->type=1;
        $data2->save();
        return response()->json([
            'success'   =>  true,
            'data'      =>  [
            ]
        ]);
    }
    public function createfile(Request $request){
        $user = auth()->user();
        $image =$request->file('image');
        if($image!=null){
            $imageName = time() . '.' . $image->getClientOriginalExtension();
            $destinationPath = public_path('/images/');
            $image->move($destinationPath, $imageName);
            $image->imagePath = $destinationPath . $imageName;
        }
        else{
            $destinationPath="";
            $imageName="";
        }
        $data=new Data;
        $data->userid=$user->id;
        $data->date=$request['date'];
        $data->time=$request['time'];
        $data->type=2;
        $data->value=$request['value']."|".$destinationPath . $imageName;
        $data->save();
        return response()->json([
            'success'   =>  true,
            'data'      =>  [
            ]
        ]);
    }
}
