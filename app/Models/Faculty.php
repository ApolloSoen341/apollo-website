<?php

namespace apollo\Models;

use Illuminate\Database\Eloquent\Model;

class Faculty extends Model
{
	/**
	* Laravel assumes the table is 'facultys'
	* In order to fix this problem we define the
	* table name here
	*/
    protected $table = 'faculties';
    /**
    * Whether or not the table uses timestamps
    */
    public $timestamps = false;
}
