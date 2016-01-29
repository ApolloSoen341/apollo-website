<?php

use Illuminate\Database\Seeder;

class RequisiteTypeSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('requisite_types')->insert([
            'type' => 'Pre-requisite'
        ]);
        DB::table('requisite_types')->insert([
            'type' => 'Co-requisite'
        ]);
    }
}
