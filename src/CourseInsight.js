import React from 'react';
import { useParams } from 'react-router-dom';
import FadeInWrapper from './FadeInWrapper';
import CourseImage from './CourseImage';
import coursesData from './coursesData';
import Footer from './Footer';
import Label from './Label';
import Pfp from './pfp.png'

function CourseInsight() {
    const { courseId } = useParams();
    const course = coursesData.find(course => course.id === courseId.toString());

    if (!course) return <div>Course not found</div>;

    return (
        <FadeInWrapper> {/* Start of fade-in effect */}
            <div style={{ marginTop: 60, padding: "0 20px" }}>

                {/* Header */}

                {/* Course Image */}

                {/* Course Description */}
                
                <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', maxWidth: '1200px', margin: '0 auto' }}>

                    {/* Left Column */}
                    <div style={{ flex: '0 0 50%', paddingRight: '15px' }}>

                        {/* Description */}
                        <div style={{ paddingLeft: '20px', paddingRight: '20px', paddingBottom: '0px', paddingBottom: '20px', borderRadius: '8px' }}>
                        <Label buttonBgColor="black" buttonText="EXPLORE NOW" />
                            <h2 style={{ marginTop: '0px', fontSize: 38, color: 'black', paddingBottom: 35, borderBottom: '1px solid rgba(0, 0, 0, 0.1)' }}>Dive into capital decisions and shareholder value in our Corporate Finance course.</h2>
                            <p style={{ fontSize: '15px', lineHeight: '1.5', color: '#6b6b6b', fontWeight: 600 }}>This is a sample course description. Here you will learn about the various aspects of the topic in detail.</p>
                            <button style={{marginTop: 30, width: '100%'}} className="button-big-cta">Enroll Now →</button>
                        </div>

                        {/* Instructor Info */}
                        <div style={{ marginBottom: '30px', padding: '20px', borderRadius: '8px' }}>
    <h2 style={{ color: 'black', borderBottom: '1px solid rgba(0, 0, 0, 0.1)', paddingBottom: '10px' }}>
        Instructor
    </h2>
    <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
        <img 
            src={Pfp}
            alt="Instructor's Profile"
            style={{ width: '50px', height: '50px', borderRadius: '50%', marginRight: '10px' }} 
        />
        <p style={{ fontSize: '18px', fontWeight: 'bold', color: 'black' }}>
            Cathleen Jaine
        </p>
    </div>
    <p style={{ fontSize: '15px', lineHeight: '1.5', color: '#6b6b6b', fontWeight: 600 }}>
        A brief bio about the instructor, detailing their expertise and experience in the subject.
    </p>
</div>


                    </div>

                    {/* Right Column */}
<div style={{ flex: '0 0 45%', paddingLeft: '15px' }}>

{/* Course Content */}
<div style={{
    position: 'sticky',
    top: '130px',
    marginBottom: '30px',
    padding: '20px',
    borderRadius: '8px',
    border: '1px solid #ccc'
}}>
    <h2 style={{
        color: 'black',
        borderBottom: '1px solid rgba(0, 0, 0, 0.1)',
        paddingBottom: '10px'
    }}>
        Course Content
    </h2>
    <details>
        <summary style={{
            fontSize: '18px',
            fontWeight: 'bold',
            color: 'black',
            marginBottom: '10px',
            cursor: 'pointer'
        }}>
            Module 1
        </summary>
        <ul style={{ listStyle: 'none', paddingLeft: '20px' }}>
            <li style={{
                fontSize: '16px',
                lineHeight: '1.5',
                color: 'black',
                marginBottom: '5px'
            }}>
                Lesson 1
            </li>
            <li style={{
                fontSize: '16px',
                lineHeight: '1.5',
                color: 'black',
                marginBottom: '5px'
            }}>
                Lesson 2
            </li>
        </ul>
    </details>
    <details style={{ marginTop: '20px' }}>
        <summary style={{
            fontSize: '18px',
            fontWeight: 'bold',
            color: 'black',
            marginBottom: '10px',
            cursor: 'pointer'
        }}>
            Module 2
        </summary>
        <ul style={{ listStyle: 'none', paddingLeft: '20px' }}>
            <li style={{
                fontSize: '16px',
                lineHeight: '1.5',
                color: 'black',
                marginBottom: '5px'
            }}>
                Lesson 1
            </li>
            <li style={{
                fontSize: '16px',
                lineHeight: '1.5',
                color: 'black',
                marginBottom: '5px'
            }}>
                Lesson 2
            </li>
        </ul>
    </details>
</div>

</div>


                </div>

                {/* Footer */}
            </div>
        </FadeInWrapper>
    );
}

export default CourseInsight;
