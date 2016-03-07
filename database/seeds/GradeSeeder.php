<?php

use Illuminate\Database\Seeder;

use apollo\Models\Grade;

class GradeSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Grade::firstOrCreate(['value' => 'A+']);
        Grade::firstOrCreate(['value' => 'A']);
        Grade::firstOrCreate(['value' => 'A-']);

        Grade::firstOrCreate(['value' => 'B+']);
        Grade::firstOrCreate(['value' => 'B']);
        Grade::firstOrCreate(['value' => 'B-']);

        Grade::firstOrCreate(['value' => 'C+']);
        Grade::firstOrCreate(['value' => 'C']);
        Grade::firstOrCreate(['value' => 'C-']);

        Grade::firstOrCreate(['value' => 'D+']);
        Grade::firstOrCreate(['value' => 'D']);
        Grade::firstOrCreate(['value' => 'D-']);

        Grade::firstOrCreate(['value' => 'F']);
    }
}
