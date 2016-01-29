<?php

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        // $this->call(FacultySeeder::class);
        // $this->call(CourseSeeder::class);
        $this->call(RequisiteTypeSeeder::class);
    }
}
