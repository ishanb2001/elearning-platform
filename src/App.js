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
import SignIn from './SignIn';
import SignUpPage from './SignUpPage';
import Cart from './Cart';
import { CartProvider } from './CartContext';

function Section({ children }) {
  return (
    <div className="section">
      {children}
    </div>
  );
}

function App() {
  return (
    <CartProvider>
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
                <Section>
                  <CourseImage 
                    text="Become an Instructor today"
                    bodyFontSize='80px'
                    headerText='BLOG'
                    backgroundImg={Teacher}
                  />
                </Section>
                <div className="wrapper" style={{ maxWidth: 1200, margin: 'auto' }}>
                  <Section><TextNearTop /></Section>
                  <Section><Pros /></Section>
                </div>
                <Section><Footer /></Section>
              </React.Fragment>
            } />
            <Route path="/CoursePage" element={<CoursePage />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/signup" element={<SignUpPage />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/course/:courseId" element={<CourseLanding />} />
          </Routes>
        </div>
      </Router>
    </CartProvider>
  );
}

export default App;
