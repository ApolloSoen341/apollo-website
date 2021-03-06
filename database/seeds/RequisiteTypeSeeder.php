<?php

use Illuminate\Database\Seeder;

use apollo\Models\RequisiteType;

class RequisiteTypeSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        RequisiteType::firstOrCreate(['name' => 'Prerequisite']);
        RequisiteType::firstOrCreate(['name' => 'Corequisite']);
    }
}
