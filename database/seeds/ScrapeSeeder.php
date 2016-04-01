<?php

use apollo\Models\Course;
use apollo\Models\CourseType;
use apollo\Models\DayOfWeek;
use apollo\Models\Faculty;
use apollo\Models\ScheduledCourse;
use apollo\Models\Session;
use apollo\Models\TimeSlot;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Seeder;

class ScrapeSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Model::unguard();
        $data = json_decode(file_get_contents('/home/matthew/Desktop/coursesFall2016.json'));

        foreach($data as $course)
        {
            // Requirements for course
            $faculty_id = Faculty::firstOrCreate(['name' => $course->faculty])->id;
            $name = substr($course->title, 0, -2);
            $number = $course->classNum;
            $credits = 3.0; // TODO delete this from the database
            $description = 'No description of the course.'; // TODO maybe delete this from the database
            // end requirements for course

            // Requirements for scheduled_course
            $course_id = Course::firstOrCreate([
                'name' => $name,
                'number' => $number,
                'credits' => $credits,
                'description' => $description,
                'faculty_id' => $faculty_id
            ])->id;
            $session_id = Session::firstOrCreate(['name' => $course->semester])->id;
            // end requirements for scheduled_course

            // Requirements for time_slot
            $scheduled_course_id = ScheduledCourse::firstOrCreate([
                'course_id' => $course_id,
                'session_id' => $session_id
            ])->id;

            if($course->day != 'TBA')
            {
                $section = $course->section;
                $room = $course->room;
                $time_start = $course->timeBegin;
                $time_end = $course->timeEnd;
                $course_type_id = $this->getType($course->type)->id;

                $days = explode(';', preg_replace('/;$/', '', chunk_split($course->day, 2, ';')));
                // end requirements for time_slot

                foreach($days as $day)
                {
                    $day_of_week_id = $this->getDay($day)->id;

                    TimeSlot::firstOrCreate([
                        'scheduled_course_id' => $scheduled_course_id,
                        'section' => $section,
                        'room' => $room,
                        'time_start' => $time_start,
                        'time_end' => $time_end,
                        'day_of_week_id' => $day_of_week_id,
                        'course_type_id' => $course_type_id
                    ]);
                }
            }
        }
        Model::reguard();
    }

    private function getType($type)
    {
        if($type == 'LEC')
            return CourseType::where('name', 'Lecture')->first();
        else if($type == 'TUT')
            return CourseType::where('name', 'Tutorial')->first();
        else if($type == 'LAB')
            return CourseType::where('name', 'Lab')->first();
        else
            return CourseType::firstOrCreate(['name' => $type]);
    }

    private function getDay($day)
    {
        if($day == 'Su')
            return DayOfWeek::where('name', 'Sunday')->first();
        else if($day == 'Mo')
            return DayOfWeek::where('name', 'Monday')->first();
        else if($day == 'Tu')
            return DayOfWeek::where('name', 'Tuesday')->first();
        else if($day == 'We')
            return DayOfWeek::where('name', 'Wednesday')->first();
        else if($day == 'Th')
            return DayOfWeek::where('name', 'Thursday')->first();
        else if($day == 'Fr')
            return DayOfWeek::where('name', 'Friday')->first();
        else if($day == 'Sa')
            return DayOfWeek::where('name', 'Saturday')->first();
    }
}
