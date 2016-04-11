<?php

namespace apollo\Http\Controllers\REST;

use apollo\Models\Preference;
use Illuminate\Http\Request;

use apollo\Http\Requests;
use apollo\Http\Controllers\Controller;

class PreferenceController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $preferences = Preference::all();
        return response()->json($preferences);
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

        $preference = new Preference;
        $preference->student_id = $input['student_id'];
        $preference->day_of_week_id = $input['day_of_week'];
        $preference->start = $input['start'];
        $preference->end = $input['end'];
        $preference->save();
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $preference = Preference::find($id);
        return response()->json($preference);
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

        $preference = Preference::find($id);
        $preference->student_id = $input['student_id'];
        $preference->day_of_week_id = $input['day_of_week'];
        $preference->start = $input['start'];
        $preference->end = $input['end'];
        $preference->save();
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        Preference::destroy($id);
    }
}
