<?php

namespace apollo\Http\Controllers\REST;

use apollo\Models\TimeSlot;
use Illuminate\Http\Request;

use apollo\Http\Requests;
use apollo\Http\Controllers\Controller;

class TimeSlotController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $time_slot = TimeSlot::all();
        return response()->json($time_slot);
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

        $time_slot = new TimeSlot;
        $time_slot->scheduled_course_id = input['scheduled_course_id'];
        $time_slot->section = $input['section'];
        $time_slot->room = $input['room'];
        $time_slot->time_start = $input['time_start'];
        $time_slot->time_end = $input['time_end'];
        $time_slot->day_of_week_id = $input['day_of_week_id'];
        $time_slot->course_type_id = $input['course_type_id'];
        $time_slot->save();
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $time_slot = TimeSlot::find($id);
        return response()->json($time_slot);
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

        $time_slot = TimeSlot::find($id);
        $time_slot->scheduled_course_id = input['scheduled_course_id'];
        $time_slot->section = $input['section'];
        $time_slot->room = $input['room'];
        $time_slot->time_start = $input['time_start'];
        $time_slot->time_end = $input['time_end'];
        $time_slot->day_of_week_id = $input['day_of_week_id'];
        $time_slot->course_type_id = $input['course_type_id'];
        $time_slot->save();
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        TimeSlot::destroy($id);
    }
}
