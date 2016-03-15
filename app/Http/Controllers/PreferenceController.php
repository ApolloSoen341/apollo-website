<?php

namespace apollo\Http\Controllers;

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
    public function index($studentid)
    {
        $preferences = Preference::all()->where('student_id', $studentid);
        return response()->json($preferences);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //return preferences view
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
    public function show($studentid, $preferenceid)
    {
        $preference = Preference::with('day_of_week', 'start', 'end')->where('student_id', $studentid)
                                                                    ->where('id', $preferenceid);
        return response()->json($preference);
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

        $preference = Preference::all()->where('id', $id);
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
