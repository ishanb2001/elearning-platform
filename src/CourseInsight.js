import React from 'react';
import { useParams } from 'react-router-dom';
import { getAuth } from '@firebase/auth';  // Added this import
import coursesData from './coursesData';
import Pfp from './pfp.png';

import { useNavigate } from 'react-router-dom'; // Added this import

function CourseInsight() {
    const { courseId } = useParams();
    const course = coursesData.find(c => c.id === courseId);
    const navigate = useNavigate();  // Initialize navigate hook

    const handleEnrollClick = () => {
        const auth = getAuth();
        if (auth.currentUser) {
            // User is signed in, navigate to the cart page
            navigate('/cart');
        } else {
            // User is not signed in, redirect to sign-in page (or show a message)
            alert("Please sign in to enroll");
            navigate('/signin');
        }
    };

    if (!course) {
        return <div>Course not found</div>;
    }

    return (
        <div style={{ marginTop: 60, padding: "0 20px" }}>

            <div className="course-info" style={{ justifyContent: 'space-between', maxWidth: '1200px', margin: '0 auto' }}>

                {/* Left Column */}
                <div style={{ flex: '0 0 50%', paddingRight: '15px' }}>

                    {/* Description */}
                    <div style={{ paddingLeft: '20px', paddingRight: '20px', paddingBottom: '0px', paddingBottom: '20px', borderRadius: '8px' }}>
                        <button style={{backgroundColor: "black", color: "white"}}>EXPLORE NOW</button>
                        <h2 style={{ marginTop: '0px', fontSize: 38, color: 'black', paddingBottom: 35, borderBottom: '1px solid rgba(0, 0, 0, 0.1)' }}>{course.SubHeaderText}</h2>
                        <p style={{ fontSize: '15px', lineHeight: '1.5', color: '#6b6b6b', fontWeight: 600 }}>{course.pageDescription}</p>
                        <button style={{marginTop: 30, width: '100%'}} onClick={handleEnrollClick} className="button-big-cta">Enroll Now →</button>
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
                    <div style={{position: 'sticky',top: '100px',marginBottom: '30px',padding: '20px',borderRadius: '8px',border: '1px solid #ccc'}}>
                        <h2 style={{color: 'black',borderBottom: '1px solid rgba(0, 0, 0, 0.1)',paddingBottom: '10px'}}>
                            Course Content
                        </h2>

                        {course.modules && course.modules.map((module, idx) => (
                            <details key={idx}>
                                <summary style={{fontSize: '18px',fontWeight: 'bold',color: 'black',marginBottom: '10px',cursor: 'pointer'}}>
                                    {module.name}
                                </summary>
                                <ul style={{ listStyle: 'none', paddingLeft: '20px' }}>
                                    {module.lessons.map((lesson, lessonIdx) => (
                                    <li key={lessonIdx} style={{fontSize: '16px',lineHeight: '1.5',color: 'black', marginBottom: '5px'}}>
                                            <button style={{fontWeight: 'bold', fontFamily: 'Manrope', width: '100%', backgroundColor: '#efeff0', paddingTop: '10px', paddingBottom: '10px',  border: 'none', borderRadius: '10px'}}>{lesson}
                                            </button></li>
                                    ))}
                                </ul>
                            </details>
                        ))}

                    </div>
                </div>
            </div>

            {/* Footer */}
        </div>
    );
}

export default CourseInsight;
