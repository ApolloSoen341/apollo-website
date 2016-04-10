<?php

use Illuminate\Database\Seeder;

use apollo\Models\Session;

class SessionSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Session::firstOrCreate(['name' => 'Summer 2016']);
        Session::firstOrCreate(['name' => 'Fall 2016']);
        Session::firstOrCreate(['name' => 'Winter 2017']);
    }
}
