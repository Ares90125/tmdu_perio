<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Requests\ChildRequest;
use Illuminate\Support\Facades\Crypt;
use App\Models\Users;
use Illuminate\Support\Facades\Hash;

class ClientAuthController extends Controller
{
    public function register(ChildRequest $request)
    {
        $data=$request->validated();
        if (empty($data['password'])) {
            return response()->json(['message' => 'Password is required'], 422);
        }
        if (empty($data['userid'])) {
            return response()->json(['message' => 'userid is required'], 422);
        }
        $data['password'] = Hash::make($data['password']);
        $data["clinic_id"]=1;
        $user = new Users($data);
        $user->save();
        return response()->json(['messsage' => 'register is successed'], 200);

    }
    public function login(ChildRequest $request){
        $data=$request->validated();
        $user=Users::Where([
            'userid'  =>  $data['userid']
        ])->first();
        if (!$user) {
            return response()->json([
                'success'   =>  false,
                'message'   =>  trans('auth.user_not_found')
            ]);
        }
        if (!Hash::check($data['password'], $user->password)) {
            return response()->json([
                'success'   =>  false,
                'message'   =>  trans('auth.failed')
            ]);
        }
        $res = $user->toArray();
        // if ($user->userid) {
        //     $res['userid'] = new OfficeResource($user->userid);
        // }
        return response()->json([
            'success'   =>  true,
            'data'      =>  [
                'token' =>  $user->createToken('access_token')->plainTextToken,
                'user'  =>  $res
            ]
        ]);
    }
}
