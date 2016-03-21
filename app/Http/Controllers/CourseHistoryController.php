<?php

namespace apollo\Http\Controllers;

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
    public function index($studentid)
    {
        $courses = CourseHistory::all()->where('student_id', $studentid);
        return response()->json($courses);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        // return view
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
        $courseHistory->grade_id = $input['grade'];
        $courseHistory->save();
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($studentid, $id)
    {
        $courseHistory = CourseHistory::all()->where('student_id', $studentid)->where('id', $id);
        return response()->json($courseHistory);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        // return view
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

        $courseHistory = CourseHistory::all()->where('id', $id);
        $courseHistory->student_id = $input['student_id'];
        $courseHistory->scheduled_course_id = $input['scheduled_course_id'];
        $courseHistory->grade_id = $input['grade'];
        $courseHistory->save();
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
