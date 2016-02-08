<?php

namespace apollo\Http\Controllers;

use Illuminate\Http\Request;

use apollo\Http\Requests;
use apollo\Http\Controllers\Controller;

class HomeController extends Controller
{
    public function index()
    {
    	return view('home');
    }
}
