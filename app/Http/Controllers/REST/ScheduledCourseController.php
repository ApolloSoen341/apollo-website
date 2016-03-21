<?php

namespace apollo\Http\Controllers\REST;

use apollo\Models\ScheduledCourse;
use Illuminate\Http\Request;

use apollo\Http\Requests;
use apollo\Http\Controllers\Controller;

class ScheduledCourseController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $scheduled_courses = ScheduledCourse::all();
        return response()->json($scheduled_courses);
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

        $course = new ScheduledCourse;
        $course->course_id = $input['course_id'];
        $course->session_id = $input['session_id'];
        $course->save();
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $course = ScheduledCourse::all()->where('id', $id);
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

        $scheduled_courses = ScheduledCourse::all()->where('id', $id);
        $scheduled_courses->course_id = $input['course_id'];
        $scheduled_courses->session_id = $input['session_id'];
        $scheduled_courses->save();
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        ScheduledCourse::destroy($id);
    }
}
