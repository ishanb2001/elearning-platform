import React from 'react';
import { useParams } from 'react-router-dom';
import FadeInWrapper from './FadeInWrapper';
import Home from './Home';
import CourseImage from './CourseImage';
import coursesData from './coursesData';

function CourseLanding() {
    const { courseId } = useParams();
    const course = coursesData.find(course => course.id === parseInt(courseId));

    if (!course) return <div>Course not found</div>;

    return (
        <div>
            <Home />
            <CourseImage 
                text={course.description}
                bodyFontSize='80px'
                headerText='BLOG'
                videoUrl={course.videoUrl}
                // Assuming course has videoUrl property. Adjust if needed.
            />
            {/* Add any other components you wish to display using course data */}
        </div>
    );
}

export default CourseLanding;
