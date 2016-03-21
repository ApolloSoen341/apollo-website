<?php

/*
|--------------------------------------------------------------------------
| Routes File
|--------------------------------------------------------------------------
|
| Here is where you will register all of the routes in an application.
| It's a breeze. Simply tell Laravel the URIs it should respond to
| and give it the controller to call when that URI is requested.
|
*/

Route::get('/', function () {
    return view('welcome');
});

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| This route group applies the "web" middleware group to every route
| it contains. The "web" middleware group is defined in your HTTP
| kernel and includes session state, CSRF protection, and more.
|
*/

Route::group(['middleware' => ['web']], function () {
    //
});

Route::group(['prefix' => 'api', 'namespace' => 'REST'], function(){
    Route::resource('course','CourseController');
    Route::resource('session','SessionController');
    Route::resource('scheduled_course', 'ScheduledCourseController');
    Route::resource('grade', 'GradeController');
    Route::resource('requisite_type', 'RequisiteTypeController');
    Route::resource('day_of_week', 'DayOfWeekController');
    Route::resource('course_type', 'CourseTypeController');

    Route::resource('user', 'UserController');
    Route::resource('user.preference', 'PreferenceController');
    Route::resource('user.coursehistory', 'CourseHistoryController');
});