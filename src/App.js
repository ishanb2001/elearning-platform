import logo from './logo.svg';
import './App.css';
import Home from './Home';
import ContentComponent from './Header';
import CourseCategories from './Filter';
import TrendingCourses from './TrendingCourses';
import Benfits from './Benifits';
import Benifits from './Benifits';


function App() {
  return (
    <div className="App">
      <Home/>
      <div style={{marginBottom: 120}}>
      <ContentComponent/>
      </div>
      <div style={{marginBottom: 120}}>
      <CourseCategories/>
      </div>
      <Benfits/>
      <TrendingCourses/>
      <div style={{marginTop: 60}}>
      
      </div>
    </div>
  );
}

export default App;
