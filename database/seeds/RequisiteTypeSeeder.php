<?php

use Illuminate\Database\Seeder;

use apollo\Models\Requisite;

class RequisiteTypeSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Requisite::firstOrCreate([
            'type' => 'Pre-requisite'
        ]);

        Requisite::firstOrCreate([
            'type' => 'Co-requisite'
        ]);
    }
}
