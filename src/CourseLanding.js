import React from 'react';
import { useParams } from 'react-router-dom';
import FadeInWrapper from './FadeInWrapper';
import Home from './Home';
import CourseImage from './CourseImage';
import coursesData from './coursesData';
import Footer from './Footer';
import CourseInsight from './CourseInsight';
import CardComponent from './CardComponent';

function CourseLanding() {
    const { courseId } = useParams();
    const course = coursesData.find(course => course.id === courseId.toString());

    if (!course) return <div>Course not found</div>;

    return (
        <FadeInWrapper> {/* Start of fade-in effect */}
        <div>

                <Home />
                {<CourseImage 
                    text={course.description}
                    bodyFontSize='80px'
                    headerText='BLOG'
                    /*bgColor="#635bff"*/
                    videoUrl={course.videoUrl} 
                    
    /> }        <div style={{maxWidth: 1200, margin: 'auto' }}>
                <CourseInsight/>
                
                </div>
                </div>
                <Footer></Footer>
        </FadeInWrapper>
    );
}

export default CourseLanding;
