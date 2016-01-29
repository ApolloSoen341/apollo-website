<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class RequisitesCreate extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('requisites', function (Blueprint $table) {
            $table->integer('course_id')->unsigned();
            $table->integer('course_requisite_id')->unsigned();
            $table->integer('requisite_type_id')->unsigned();

            $table->foreign('course_id')->references('id')->on('courses')->onDelete('cascade');
            $table->foreign('course_requisite_id')->references('id')->on('courses')->onDelete('cascade');
            $table->foreign('requisite_type_id')->references('id')->on('requisite_types');

            $table->primary(['course_id', 'course_requisite_id']);
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::drop('requisites');
    }
}
