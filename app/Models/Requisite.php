<?php

namespace apollo\Models;

use Illuminate\Database\Eloquent\Model;

class Requisite extends Model
{
    public $timestamps = false;
    public $increment = false;

	public function requisite()
	{
		return $this->hasOne('apollo\\Models\\Course', 'id', 'course_requisite_id');
	}

	public function type()
	{
		return $this->hasOne('apollo\\Models\\RequisiteType', 'id', 'requisite_type_id');
	}

    public static function addRequisites($course_id, $array, $type)
    {
    	foreach ($array as $course_requisite_id)
    	{
	    	$requisite = new Requisite;
            $requisite->course_id = $course_id;
            $requisite->course_requisite_id = $course_requisite_id;
            $requisite->requisite_type_id = $type;
            $requisite->save();
    	}
    }
}
