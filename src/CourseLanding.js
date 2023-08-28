import React from 'react';
import { useParams } from 'react-router-dom';
import FadeInWrapper from './FadeInWrapper';
import Home from './Home';
import CourseImage from './CourseImage';
import coursesData from './coursesData';
import Footer from './Footer';
import CourseInsight from './CourseInsight';

function CourseLanding() {
    const { courseId } = useParams();
    const course = coursesData.find(course => course.id === courseId.toString());

    if (!course) return <div>Course not found</div>;

    return (
        <FadeInWrapper> {/* Start of fade-in effect */}
        <div>
        <div className="wrapper clearfix">

                <Home />
                {<CourseImage 
                    text={course.description}
                    bodyFontSize='80px'
                    headerText='BLOG'
                    /*bgColor="#635bff"*/
                    videoUrl={course.videoUrl} 
                    // Assuming course has videoUrl property. Adjust if needed.
    /> }
                <CourseInsight/>
                </div>
                <Footer></Footer>
                </div>
        </FadeInWrapper>
    );
}

export default CourseLanding;
