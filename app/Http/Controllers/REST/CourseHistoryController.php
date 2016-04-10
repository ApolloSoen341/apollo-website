<?php

namespace apollo\Http\Controllers\REST;

use apollo\Models\CourseHistory;
use Illuminate\Http\Request;

use apollo\Http\Requests;
use apollo\Http\Controllers\Controller;

class CourseHistoryController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $course_histories = CourseHistory::with('student', 'scheduled_course', 'grade')->get();
        return response()->json($course_histories);
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

        $courseHistory = new CourseHistory;
        $courseHistory->student_id = $input['student_id'];
        $courseHistory->scheduled_course_id = $input['scheduled_course_id'];
        $courseHistory->grade_id = $input['grade_id'];
        $courseHistory->save();
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $course_history = CourseHistory::with('student', 'scheduled_course', 'grade')->find($id);
        return response()->json($course_history);
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

        $course_history = CourseHistory::find($id);
        $course_history->student_id = $input['student_id'];
        $course_history->scheduled_course_id = $input['scheduled_course_id'];
        $course_history->grade_id = $input['grade_id'];
        $course_history->save();
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        CourseHistory::destroy($id);
    }
}
