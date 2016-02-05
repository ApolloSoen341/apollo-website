@extends('template')

@section('scripts')
	<script type="text/javascript">
		$(document).ready(function(){
			$('.collapsible').collapsible();
		});
	</script>
@endsection

@section('styles')
	<style>
		.course-details li {
			margin-bottom: 10px;
		}
		.course-details li:last-child {
			margin-bottom: 0;
		}
		.course-details span {
			font-weight: bold;
			text-decoration: underline;
		}
	</style>
@endsection

@section('content')
	<div class="row">
		<ul class="collapsible col s12 l8 push-l2" data-collapsible="accordion">
			@foreach($courses as $course)
				<li>
					<div class="collapsible-header">{{ $course->name }}</div>
					<div class="collapsible-body">
						<div class="row">
							<ul class="course-details col s11 push-s1">
								<li><span>Credits:</span> {{ $course->credits }}</li>
								<li><span>Faculty:</span> {{ $course->faculty->name }}</li>
								<li><span>Description:</span> {{ $course->description }}</li>
							</ul>
						</div>
					</div>
				</li>
			@endforeach
		</ul>
	</div>
@endsection