import logo from './logo.svg';
import './App.css';
import Home from './Home';
import ContentComponent from './Header';
import CourseCategories from './Filter';
import TrendingCourses from './TrendingCourses';


function App() {
  return (
    <div className="App">
      <Home/>
      <div style={{marginBottom: 50}}>
      <ContentComponent/>
      </div>
      <div style={{marginBottom: 50}}>
      <CourseCategories/>
      </div>
      <TrendingCourses/>
    </div>
  );
}

export default App;
