<?php

namespace apollo\Http\Controllers\REST;

use Illuminate\Http\Request;

use apollo\Http\Requests;
use apollo\Http\Controllers\Controller;

use apollo\Models\Course;
use apollo\Models\Faculty;
use apollo\Models\Requisite;
use apollo\Models\RequisiteType;

class CourseController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $courses = Course::with('faculty', 'prerequisites', 'corequisites')->get();
        return response()->json($courses);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $input = $request->input();

        $course = new Course;
        $course->name = $input['course_name'];
        $course->title = $input['title'];
        $course->credits = $input['course_credits'];
        $course->description = $input['course_description'];
        $course->faculty_id = $input['faculty_id'];
        $course->save();

        // Pre-requisite is id 1 in RequisiteType table
        if(isset($input['prerequisites']))
            Requisite::addRequisites($course->id, $input['prerequisites'], 1);

        // Co-requisite is id 2 in RequisiteType table
        if(isset($input['corequisites']))
            Requisite::addRequisites($course->id, $input['corequisites'], 2);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $course = Course::with('faculty', 'prerequisites', 'corequisites')->where('id', $id)->first();
        return response()->json($course);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $input = $request->input();

        $course = Course::all()->where('id', $id)->first();
        $course->name = $input['course_name'];
        $course->credits = $input['course_credits'];
        $course->description = $input['course_description'];
        $course->faculty_id = $input['faculty_id'];
        $course->save();

        // Pre-requisite is id 1 in RequisiteType table
        if(isset($input['prerequisites']))
            Requisite::addRequisites($course->id, $input['prerequisites'], 1);

        // Co-requisite is id 2 in RequisiteType table
        if(isset($input['corequisites']))
            Requisite::addRequisites($course->id, $input['corequisites'], 2);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        Course::destroy($id);
    }
}
