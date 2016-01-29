@extends('template')


@section('content')
<div class="row">
  <form class="col s12" method="post" action="{{ URL::route('faculty.store') }}">
    <div class="row">
      <div class="input-field col s12">
        <input id="faculty_name" type="text" class="validate" name="faculty_name">
        <label for="faculty_name">Faculty Name</label>
      </div>
    </div>
      

	<div class="row">
	  <button class="btn waves-effect waves-light col s12" type="submit">Submit
	    <i class="material-icons right">send</i>
	  </button>
    </div> 
  </form>
</div>
@endsection