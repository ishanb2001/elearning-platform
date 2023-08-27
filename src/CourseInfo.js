// CoursePage.js
import { useParams } from 'react-router-dom';
import Course from './Course';

function CoursePage() {
  const { courseId } = useParams();
  
  // Fetch course data based on courseId.
  const courseData = getCourseDataById(courseId); 

  return <Course data={courseData} />;
}

function getCourseDataById(courseId) {
  const allCourses = [
    { id: '1', title: 'Course 1', description: 'Description for course 1' },
    // ... other courses ...
  ];

  return allCourses.find(course => course.id === courseId);
}

export default CoursePage;
