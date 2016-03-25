<?php

namespace apollo\Models;

use Illuminate\Database\Eloquent\Model;

class CourseHistory extends Model
{
	/*
	 * Whether or not the table uses timestamps
	 */
	public $timestamps = false;

	protected $hidden = [
		'student_id',
		'scheduled_course_id',
		'grade_id'
	];

	public function student()
	{
		return $this->belongsTo(User::class);
	}

	public function scheduled_course()
	{
		return $this->belongsTo(ScheduledCourse::class);
	}

	public function grade()
	{
		return $this->belongsTo(Grade::class);
	}
}
