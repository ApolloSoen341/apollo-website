<?php

namespace apollo\Models;

use Illuminate\Database\Eloquent\Model;

class Course extends Model
{
    /**
    * Whether or not the table uses timestamps
    */
    public $timestamps = false;

    /**
    * This will hide the following fields when getting a query result
    */
    protected $hidden = [
    	'faculty_id'
    ];

    public function faculty()
    {
    	return $this->hasOne('apollo\\Models\\Faculty', 'id', 'faculty_id');
    }
}
