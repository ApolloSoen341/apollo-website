<?php

use Illuminate\Database\Seeder;

use apollo\Models\Course;

class CourseSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Course::firstOrCreate([
            'name' => 'Software Process',
            'description' => 'A class that teaches you how to develop software with a team.',
            'faculty_id' => 2
        ]);

        Course::firstOrCreate([
            'name' => 'Technical Writing',
            'description' => 'Teaches you how to write things.',
            'faculty_id' => 1
        ]);
    }
}
