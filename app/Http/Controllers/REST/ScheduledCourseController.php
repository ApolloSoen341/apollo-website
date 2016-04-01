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
        $scheduled_courses = ScheduledCourse::with('course.faculty', 'session', 'timeSlots.courseType', 'timeSlots.dayOfWeek')->get();
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

        $scheduled_course = new ScheduledCourse;
        $scheduled_course->course_id = $input['course_id'];
        $scheduled_course->session_id = $input['session_id'];
        $scheduled_course->save();
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $scheduled_course = ScheduledCourse::with('course.faculty', 'session', 'timeSlots.courseType', 'timeSlots.dayOfWeek')->find($id);
        return response()->json($scheduled_course);
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

        $scheduled_course = ScheduledCourse::find($id);
        $scheduled_course->course_id = $input['course_id'];
        $scheduled_course->session_id = $input['session_id'];
        $scheduled_course->save();
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
