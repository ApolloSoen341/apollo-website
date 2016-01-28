<?php

use Illuminate\Database\Seeder;

class CourseSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('courses')->insert([
            'title' => 'Software Process',
            'description' => 'A class that teaches you how to develop software with a team.',
            'faculty_id' => 2
        ]);
        DB::table('courses')->insert([
            'title' => 'Technical Writing',
            'description' => 'Teaches you how to write things.',
            'faculty_id' => 1
        ]);
    }
}
