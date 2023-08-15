import React from 'react';
import './App.css';
import Home from './Home';
import ContentComponent from './Header';
import CourseCategories from './Filter';
import TrendingCourses from './TrendingCourses';
import Benfits from './Benifits';
import TextNearTop from './Card';
import CourseImage from './CourseImage';
import Footer from './Footer';
import Pros from './Pros';

function Section({ children }) {
  return (
    <div className="section">
      {children}
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <Section><Home/></Section>
      <Section><ContentComponent/></Section>
      <Section><TextNearTop /></Section>
      
      <hr className="divider" />
      
      <Section><Pros/></Section>
      <Section><CourseCategories/></Section>
      <Section><TrendingCourses/></Section>
      <Section><CourseImage/></Section>
      <Section><Footer/></Section>
    </div>
  );
}

export default App;
