import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Home';
import ContentComponent from './Header';
import CourseCategories from './Filter';
import TrendingCourses from './TrendingCourses';
import CourseImage from './CourseImage';
import Footer from './Footer';
import Pros from './Pros';
import CardComponent from './CardComponent';
import CoursePage from './CoursePage';
import TextNearTop from './Card';
import FadeInWrapper from './FadeInWrapper';
import CourseLanding from './CourseLanding';
import Teacher from './teacher.png';
import SignUp from './SignUp';  // import the SignUp component
import Login from './LogIn';  // import the Login component
import SignIn from './SignIn';  // import the SignUp component

function Section({ children }) {
  return (
    <div className="section">
      {children}
    </div>
  );
}

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={
            <React.Fragment>
              <FadeInWrapper>
                <Section><Home /></Section>
              </FadeInWrapper>
              <div className="wrapper" style={{ maxWidth: 1200, margin: 'auto' }}>
                <FadeInWrapper>
                  <Section><ContentComponent /></Section>
                </FadeInWrapper>
                <Section><CardComponent /></Section>
                <Section><CourseCategories /></Section>
              </div>
              {<CourseImage 
                    text =  "Become an Instructor today"
                    bodyFontSize='80px'
                    headerText='BLOG'
                    /*bgColor="#635bff"*/
                    backgroundImg={Teacher}
                    // Assuming course has videoUrl property. Adjust if needed.
    /> }
              <Section><CourseImage /></Section>
              <div className="wrapper" style={{ maxWidth: 1200, margin: 'auto' }}>
                <Section><TextNearTop /></Section>
                <Section><Pros /></Section>
              </div>
              <Section><Footer /></Section>
            </React.Fragment>
          } />
          <Route path="/CoursePage" element={<CoursePage />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/course/:courseId" element={<CourseLanding />} />
          <Route exact path="/" component={Home} />
          <Route path="/signin" component={SignIn} />
          {/* The above line ensures that for any URL of the form /course/5, 
               the CourseLanding component will be displayed. */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
