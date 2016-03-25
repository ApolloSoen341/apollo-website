<?php

namespace apollo\Http\Controllers\REST;

use apollo\Models\DayOfWeek;
use Illuminate\Http\Request;

use apollo\Http\Requests;
use apollo\Http\Controllers\Controller;

class DayOfWeekController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $day_of_weeks = DayOfWeek::all();
        return response()->json($day_of_weeks);
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

        $day_of_week = new DayOfWeek;
        $day_of_week->name = $input['name'];
        $day_of_week->save();
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $day_of_week = DayOfWeek::find($id);
        return response()->json($day_of_week);
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

        $day_of_week = DayOfWeek::find($id);
        $day_of_week->name = $input['name'];
        $day_of_week->save();
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        DayOfWeek::destroy($id);
    }
}
