import logo from './logo.svg';
import './App.css';
import Home from './Home';
import ContentComponent from './Header';
import CourseCategories from './Filter';
import TrendingCourses from './TrendingCourses';
import Benfits from './Benifits';
import Benifits from './Benifits';
import TextNearTop from './Card';
import CourseImage from './CourseImage';


function App() {
  return (
    <div className="App">
      <Home/>
      <div style={{marginBottom: 60}}>
      <ContentComponent/>
      </div>
      <TextNearTop />
      <div style={{marginTop: 60, marginBottom: 80}}>
      <CourseCategories/>
      </div>
      <div style={{marginBottom: 65}}>
      <TrendingCourses/>
      </div>
      <div style={{marginTop: 60}}>
       <CourseImage/>
      </div>

      <div style={{marginTop: 60}}>

      
      </div>
    </div>
  );
}

export default App;
