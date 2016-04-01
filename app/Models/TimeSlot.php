<?php

namespace apollo\Models;

use Illuminate\Database\Eloquent\Model;

class TimeSlot extends Model
{
	/*
	 * Whether or not the table uses timestamps
	 */
	public $timestamps = false;

	protected $hidden = [
		'course_type_id',
		'day_of_week_id'
	];

	public function courseType()
	{
		return $this->belongsTo(CourseType::class);
	}

	public function dayOfWeek()
	{
		return $this->belongsTo(DayOfWeek::class);
	}
}
