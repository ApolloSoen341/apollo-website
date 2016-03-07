<?php

use Illuminate\Database\Seeder;

use apollo\CourseType;

class CourseTypeSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        CourseType::firstOrCreate(['name' => 'Lecture']);
        CourseType::firstOrCreate(['name' => 'Lab']);
        CourseType::firstOrCreate(['name' => 'Tutorial']);
    }
}
