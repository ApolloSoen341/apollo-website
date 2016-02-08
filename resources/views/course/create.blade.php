@extends('template')

@section('scripts')
<script type="text/javascript">
  $(document).ready(function() {
    $('select').material_select();
  });
</script>
@endsection

@section('content')
<div class="row">
  <form class="col s12" method="post" action="{{ URL::route('course.store') }}">
    <div class="row">
      <div class="input-field col s12">
        <input id="course_name" type="text" class="validate" name="course_name">
        <label for="course_name">Course Name</label>
      </div>
      <div class="input-field col s12">
        <textarea id="course_description" type="text" class="validate materialize-textarea" name="course_description"></textarea>
        <label for="course_description">Course Description</label>
      </div>
      <div class="input-field col s12 l6">
          <input id="course_credits" type="number" step="any" class="validate" name="course_credits">
          <label for="course_credits">Credits</label>
        </div>
      <div class="input-field col s12 l6">
        <select name="faculty_id">
          <option value="" disabled selected>Choose Faculty</option>
          @foreach($faculties as $faculty)
            <option value="{{ $faculty->id }}">{{ $faculty->name }}</option>
          @endforeach
        </select>
        <label>Faculty</label>
      </div>

      <div class="input-field col s12 l6">
        <select name="prerequisites[]" multiple>
          <option value="" disabled selected>Pre-requisite Courses</option>
          @foreach($courses as $course)
            <option value="{{ $course->id }}">{{ $course->name }}</option>
          @endforeach
        </select>
        <label>Pre-requisites</label>
      </div>

      <div class="input-field col s12 l6">
        <select name="corequisites[]" multiple>
          <option value="" disabled selected>Co-requisite Courses</option>
          @foreach($courses as $course)
            <option value="{{ $course->id }}">{{ $course->name }}</option>
          @endforeach
        </select>
        <label>Co-requisites</label>
      </div>

      <div class="row">
        <button class="btn waves-effect waves-light col s12" type="submit">Submit
          <i class="material-icons right">send</i>
        </button>
      </div> 
    </div>
  </form>
</div>
@endsection