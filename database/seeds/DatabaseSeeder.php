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
        // $this->call(UserTableSeeder::class);
        $this->call(CourseTypeSeeder::class);
        $this->call(DayOfWeekSeeder::class);
        $this->call(GradeSeeder::class);
        $this->call(RequisiteTypeSeeder::class);
    }
}
