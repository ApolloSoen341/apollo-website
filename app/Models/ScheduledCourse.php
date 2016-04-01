<?php

namespace apollo\Models;

use Illuminate\Database\Eloquent\Model;

class ScheduledCourse extends Model
{
	/*
	 * Whether or not the table uses timestamps
	 */
	public $timestamps = false;

	protected $hidden = [
		'course_id',
		'session_id'
	];

	public function course()
	{
		return $this->belongsTo(Course::class);
	}

	public function session()
	{
		return $this->belongsTo(Session::class);
	}

	public function timeSlots()
	{
		return $this->hasMany(TimeSlot::class);
	}
}
