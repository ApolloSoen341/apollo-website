<?php

use Illuminate\Database\Seeder;

class FacultySeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('faculties')->insert([
            'name' => 'Engineering Core'
        ]);
        DB::table('faculties')->insert([
            'name' => 'Software Engineering Core'
        ]);
    }
}
