<?php

namespace apollo;

use Illuminate\Database\Eloquent\Model;

class Requisite extends Model
{
	/*
	 * Whether or not the table uses timestamps
	 */
	public $timestamps = false;

	/*
	 * Whether or not the table's id is autoincrement
	 */
	public $increment = false;

	// Relations
	public function requisite()
	{
		return $this->hasOne('apollo\\Course', 'id', 'course_requisite_id');
	}

	public function type()
	{
		return $this->hasOne('apollo\\RequisiteType', 'id', 'requisite_type_id');
	}

	// Class functions
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
