<?php

use Illuminate\Database\Seeder;

use apollo\Grade;

class GradeSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Grade::firstOrCreate(['name' => 'A+']);
        Grade::firstOrCreate(['name' => 'A']);
        Grade::firstOrCreate(['name' => 'A-']);

        Grade::firstOrCreate(['name' => 'B+']);
        Grade::firstOrCreate(['name' => 'B']);
        Grade::firstOrCreate(['name' => 'B-']);

        Grade::firstOrCreate(['name' => 'C+']);
        Grade::firstOrCreate(['name' => 'C']);
        Grade::firstOrCreate(['name' => 'C-']);

        Grade::firstOrCreate(['name' => 'D+']);
        Grade::firstOrCreate(['name' => 'D']);
        Grade::firstOrCreate(['name' => 'D-']);

        Grade::firstOrCreate(['name' => 'F']);
    }
}
