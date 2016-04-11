<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateTimeSlotsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('time_slots', function (Blueprint $table) {
            $table->increments('id');
            $table->integer('scheduled_course_id')->unsigned();
            $table->string('section');
            $table->string('room');
            $table->time('time_start');
            $table->time('time_end');
//            $table->integer('day_of_week_id')->unsigned();
            $table->string('day');
            $table->integer('course_type_id')->unsigned();

            $table->foreign('scheduled_course_id')->references('id')->on('scheduled_courses')->onDelete('cascade');
//            $table->foreign('day_of_week_id')->references('id')->on('day_of_weeks')->onDelete('cascade');
            $table->foreign('course_type_id')->references('id')->on('course_types')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::drop('time_slots');
    }
}
