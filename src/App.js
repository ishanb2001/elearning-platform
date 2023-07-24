import logo from './logo.svg';
import './App.css';
import Home from './Home';
import ContentComponent from './Header';
import CourseCategories from './Filter';


function App() {
  return (
    <div className="App">
      <Home/>
      <ContentComponent/>
      <CourseCategories/>
    </div>
  );
}

export default App;
