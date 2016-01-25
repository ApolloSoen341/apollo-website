@extends('welcome')

@section('content')
<div class="row">
  <form class="col s12" method="post" action="{{ URL::route('course_register') }}">
    <div class="row">
      <div class="input-field col s12">
        <input id="course_name" type="text" class="validate" name="course_name">
        <label for="course_name">Course Name</label>
      </div>
      <div class="input-field col s12">
        <textarea id="course_description" type="text" class="validate materialize-textarea" name="course_description"></textarea>
        <label for="course_description">Course Description</label>
      </div>
      <div class="input-field col s12">
        <select name="faculty_id">
          <option value="" disabled selected>Choose Faculty</option>
          
          @foreach($faculties as $faculty)
            <option value="{{ $faculty->id }}">{{ $faculty->name }}</option>
          @endforeach
        
        </select>
        <label>Faculty</label>
      </div>
      <button class="btn waves-effect waves-light" type="submit">Submit
        <i class="material-icons right">send</i>
      </button>  
    </div>
  </form>
</div>


<script type="text/javascript">
  $(document).ready(function() {
    $('select').material_select();
  });
</script>
@endsection