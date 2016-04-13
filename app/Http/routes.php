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

Route::group(['prefix' => 'api', 'namespace' => 'REST', 'middleware' => 'cors'], function(){
    Route::resource('course','CourseController', ['except' => ['create', 'edit']]);
    Route::resource('course_history', 'CourseHistoryController', ['except' => ['create', 'edit']]);
    Route::resource('course_type', 'CourseTypeController', ['except' => ['create', 'edit']]);
    Route::resource('day_of_week', 'DayOfWeekController', ['except' => ['create', 'edit']]);
    Route::resource('faculty','FacultyController', ['except' => ['create', 'edit']]);
    Route::resource('grade', 'GradeController', ['except' => ['create', 'edit']]);
    Route::resource('preference','PreferenceController', ['except' => ['create', 'edit']]);
    Route::resource('requisite_type', 'RequisiteTypeController', ['except' => ['create', 'edit']]);
    Route::resource('scheduled_course', 'ScheduledCourseController', ['except' => ['create', 'edit']]);
    Route::resource('session','SessionController', ['except' => ['create', 'edit']]);
    Route::resource('time_slot','TimeSlotController', ['except' => ['create', 'edit']]);
    Route::resource('student', 'UserController', ['except' => ['create', 'edit']]);
});


Route::any(
    '{all}',
    function(){return view('index');}
)->where('all', '.*');