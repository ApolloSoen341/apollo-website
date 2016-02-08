@extends('template')

@section('content')
<div class="row">
	<a class="waves-effect waves-light btn-large col s12 m6 l3" href="{{ URL::route('course.index') }}">View Courses</a>
	<a class="waves-effect waves-light btn-large col s12 m6 l3" href="{{ URL::route('course.create') }}">Create Course</a>
	<a class="waves-effect waves-light btn-large col s12 m6 l3" href="{{ URL::route('faculty.index') }}">View Faculties</a>
	<a class="waves-effect waves-light btn-large col s12 m6 l3" href="{{ URL::route('faculty.create') }}">Create Faculty</a>
</div>
@endsection