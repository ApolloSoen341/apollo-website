<?php

namespace apollo;

use Illuminate\Database\Eloquent\Model;

class Course extends Model
{
    /**
    * Whether or not the table uses timestamps
    */
    public $timestamps = false;

    public function faculty()
    {
    	return $this->hasOne('apollo\\Faculty', 'id', 'faculty_id');
    }
}
