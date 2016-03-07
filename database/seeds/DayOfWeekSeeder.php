<?php

use Illuminate\Database\Seeder;

use apollo\DayOfWeek;

class DayOfWeekSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DayOfWeek::firstOrCreate(['name' => 'Sunday']);
        DayOfWeek::firstOrCreate(['name' => 'Monday']);
        DayOfWeek::firstOrCreate(['name' => 'Tuesday']);
        DayOfWeek::firstOrCreate(['name' => 'Wednesday']);
        DayOfWeek::firstOrCreate(['name' => 'Thursday']);
        DayOfWeek::firstOrCreate(['name' => 'Friday']);
        DayOfWeek::firstOrCreate(['name' => 'Saturday']);
    }
}
