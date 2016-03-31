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

Route::get('/', 'test@index');

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
    Route::resource('course_history', 'CourseHistoryController');
    Route::resource('course_type', 'CourseTypeController');
    Route::resource('day_of_week', 'DayOfWeekController');
    Route::resource('faculty','FacultyController');
    Route::resource('grade', 'GradeController');
    Route::resource('preference','PreferenceController');
    Route::resource('requisite_type', 'RequisiteTypeController');
    Route::resource('scheduled_course', 'ScheduledCourseController');
    Route::resource('session','SessionController');
    Route::resource('time_slot','TimeSlotController');
    Route::resource('student', 'UserController');
});