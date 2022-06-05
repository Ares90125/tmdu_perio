<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use DB;

class VideoSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('videos')->insert([
            'value' =>  "/program/a4.mp4",
            "title" =>" 歯ブラシの持ち方",
            'type' =>1,
        ]);
        DB::table('videos')->insert([
            'value' =>  "/program/a3.mp4",
            "title" =>"磨き方",
            'type' =>2,
        ]);
        DB::table('videos')->insert([
            'value' =>  "/program/a6.mp4",
            "title" =>"前歯 外側",
            'type' =>2,
        ]);
        DB::table('videos')->insert([
            'value' =>  "/program/a5.mp4",
            "title" =>"前歯 内側",
            'type' =>3,
        ]);
        DB::table('videos')->insert([
            'value' =>  "/program/a10.mp4",
            "title" =>"上の奥歯 外側",
            'type' =>3,
        ]);
        DB::table('videos')->insert([
            'value' =>  "/program/a9.mp4",
            "title" =>"下の奥歯 外側",
            'type' =>3,
        ]);
        // 1111111111111111111

        DB::table('videos')->insert([
            'value' =>  "/program/a8.mp4",
            "title" =>"上の奥歯 内側",
            'type' =>3,
        ]);
        DB::table('videos')->insert([
            'value' =>  "/program/a7.mp4",
            "title" =>"下の奥歯 内側",
            'type' =>4,
        ]);
        DB::table('videos')->insert([
            'value' =>  "/program/a2.mp4",
            "title" =>"歯間ブラシ",
            'type' =>4,
        ]);
        DB::table('videos')->insert([
            'value' =>  "/program/a1.mp4",
            "title" =>" フロス・糸ようじ",
            'type' =>4,
        ]);
    }
}
