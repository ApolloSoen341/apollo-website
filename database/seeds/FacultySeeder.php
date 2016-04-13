<?php

use Illuminate\Database\Seeder;

use apollo\Models\Faculty;

class FacultySeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Faculty::firstOrCreate([
            'name' => 'Engineering Core'
        ]);

        Faculty::firstOrCreate([
            'name' => 'Software Engineering Core'
        ]);
    }
}
