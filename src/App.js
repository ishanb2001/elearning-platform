import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
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
import NewPage from './CoursePage';
import CardComponent from './CardComponent';

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
          <Route path="/" element={<React.Fragment>
            <Section><Home/></Section>
            <div class="wrapper" style={{maxWidth: 1200, margin: 'auto'}}>
            <Section><ContentComponent/></Section>
            <Section><CourseCategories/></Section>
            <Section><CardComponent /></Section>
            <Section><CourseImage/></Section>
            <Section><TextNearTop /></Section>
            <Section><Pros/></Section>
            </div>
            <Section><Footer/></Section>
          </React.Fragment>} />
          <Route path="/newpage" element={<NewPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
