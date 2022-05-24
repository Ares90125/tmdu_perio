<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Adminuser;
use Illuminate\Support\Facades\Hash;

class AdminSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $i = 1;
        $user = new Adminuser;
        $user->fill([
            'userid' => 'admin',
            'password' => Hash::make('admin'),
            'clinic_id'=>1
        ]);
        $user->save();
    }
}
