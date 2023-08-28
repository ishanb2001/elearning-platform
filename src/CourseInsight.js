import React from 'react';
import { useParams } from 'react-router-dom';
import FadeInWrapper from './FadeInWrapper';
import Home from './Home';
import CourseImage from './CourseImage';
import coursesData from './coursesData';
import Footer from './Footer';

function CourseInsight() {
    const { courseId } = useParams();
    const course = coursesData.find(course => course.id === courseId.toString());

    if (!course) return <div>Course not found</div>;

    return (
        <FadeInWrapper> {/* Start of fade-in effect */}
        <div>
                <div className='flex-info' style={{display: 'flex', gap:'60px', maxWidth: 1200, paddingTop: 70, paddingBottom: 70, margin: 'auto'}}>
                <div style={{width: '70%'}}>
                <div className="course-body-title">{course.SubHeaderText}</div>
                <div className="course-body">{course.bodyText}</div>
                </div>
                <div className= "benifits" style={{display: 'flex', borderRadius: 10, paddingRight: 50, width: '50%'}}>
                <div style={{display: 'flex', gap:'5px', borderRadius: 10, width: '50%'}}>
                <div className="course-body-title">{course.SubHeaderText}</div>
                <div className="course-body">{course.bodyText}</div>
                </div>
                <div style={{display: 'flex', gap:'5px', borderRadius: 10, width: '50%'}}>
                <div className="course-body-title">{course.SubHeaderText}</div>
                <div className="course-body">{course.bodyText}</div>
                </div>
                </div>
                </div>
                </div>
        </FadeInWrapper>
    );
}

export default CourseInsight;




















