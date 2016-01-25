<?php

namespace apollo\Http\Controllers;

use Illuminate\Http\Request;

use apollo\Http\Requests;
use apollo\Http\Controllers\Controller;
use apollo\Course;
use apollo\Faculty;

class CourseController extends Controller
{
    public function display()
    {
    	$courses = Course::all();

    	foreach ($courses as $course) {
	    	$course->faculty->name;
		}

    	// dd($courses);

    	return response()->json(
    		array(
	    		'courses' => $courses->toArray()
    		)
    	);
    }

    public function registration()
    {
    	$faculties = Faculty::all();
    	return view('courses', array('faculties' => $faculties));
    }

    public function register(Request $request)
    {
    	$input = $request->input();

    	return response()->json(
    		array(
    			'input' => $input
    		)
    	);
    }
}
