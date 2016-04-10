<?php

namespace apollo\Models;

use Illuminate\Database\Eloquent\Model;

use Illuminate\Database\Eloquent\Relations\BelongsToMany;

class Course extends Model
{
	/*
	 * Whether or not the table uses timestamps
	 */
	public $timestamps = false;

	/*
	 * This will hide the following fields when getting a query result
	 */
	protected $hidden = [
		'faculty_id',
		'pivot'
	];

	// Relations
	public function faculty()
	{
		return $this->belongsTo(Faculty::class);
	}

	public function prerequisites()
	{
		return $this->requisites(1);
	}

	public function corequisites()
	{
		return $this->requisites(2);
	}

	// Relation helper
	private function requisites($type_id)
	{
		$instance = new Course;
		$relation = $this->getBelongsToManyCaller();
		$foreignKey = 'course_id';
		$otherKey = 'course_requisite_id';
		$table = 'requisites';
		$query = $instance->newQuery()->where('requisite_type_id', $type_id);
		return new BelongsToMany($query, $this, $table, $foreignKey, $otherKey, $relation);
	}
}
