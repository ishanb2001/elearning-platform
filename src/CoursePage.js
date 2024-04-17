import React, { useState } from 'react';
import './App.css';
import CourseCard from './CourseCard';
import editImage from './video-editing.jpg'; 
import Home from './Home';
import CourseImage from './CourseImage';
import FadeInWrapper from './FadeInWrapper';
import Footer from './Footer';
import SoftwareDev from './software-dev.png'; 
import WomanImageComputer from './woman-computer.png'; 
import AsianWoman from './asian-woman.png'; 
import StudentOne from './student-one.jpg'; 
import ManPhone from './man-phone.png'; 
import DataAnalyst from './data-analyst.png'; 
import ManThinking from './man-thinking.png'; 
import BrainStorming from './brainstorming.png'; 
import { Link } from 'react-router-dom';
import videoFile from './video.mp4';
import { useLocation } from 'react-router-dom';  // Note the addition of useLocation


function CoursePage() {
  const [filter, setFilter] = useState('all');
  const location = useLocation();  // Added this line
  const searchParams = new URLSearchParams(location.search);  // Added this line
  const searchQuery = searchParams.get("search") || '';  // Added this line

  const items = [
    { 
      id: 1, 
      category: 'A', 
      content: '1',
      image: BrainStorming,
      description: 'This is the description for item 1',
      buttonText: 'Button 1',
      buttonBgColor: 'red',
      buttonTextColor: 'white'
    },
    { 
      id: 2, 
      category: 'A', 
      content: '2',
      image: AsianWoman,
      description: 'This is the description for item 2',
      buttonText: 'Button 2',
      buttonBgColor: 'blue',
      buttonTextColor: 'yellow'
    },
    { id: 3, 
    image: SoftwareDev,
    category: 'B', 
    content: '3',
    description: 'This is the description for item 2',
      buttonText: 'Button 2',
      buttonBgColor: 'blue',
      buttonTextColor: 'yellow'
  },

    { id: 5,
      category: 'B',
      content: '4',
      description: 'This is the description for item 2',
      buttonText: 'Button 2',
      buttonBgColor: 'blue',
      buttonTextColor: 'yellow',
      image: StudentOne,
},

    { id: 6,
      category: 'A',
      content: '5',
      buttonText: 'Button 2',
      buttonBgColor: 'blue',
      buttonTextColor: 'yellow',
      image: ManThinking,
    },

    { id: 7,
      category: 'B',
      content: '6',
      buttonText: 'Button 2',
      buttonBgColor: 'blue',
      buttonTextColor: 'yellow',
      image: DataAnalyst,
     },
    { id: 8,
      category: 'B',
      content: '7',
      buttonText: 'Button 2',
      buttonBgColor: 'blue',
      buttonTextColor: 'yellow',
      image: ManPhone,
     }
  ];
  

  const filteredItems = filter === 'all' ? items : items.filter(item => item.category === filter);

  const searchFilteredItems = searchQuery 
    ? filteredItems.filter(item => 
        (typeof item.description === 'string' && item.description.toLowerCase().includes(searchQuery.toLowerCase())) 
        || 
        (`Title ${item.content}`.toLowerCase().includes(searchQuery.toLowerCase()))
      )
    : filteredItems;



  return (
    <div>
      <FadeInWrapper>
        <Home />
        <CourseImage 
          text="All the latest and important information"
          bgColor="#635bff"
          bodyFontSize='80px'
          gradient="linear-gradient(135deg, #4135ef, #6535ef)"
          headerText='BLOG'
        />

<div className="filter-wrapper" style={{paddingTop: 50, marginBottom: 100, borderRadius:30, backgroundColor: 'white', maxWidth: 1200, margin: 'auto'}}>
          <div className="button-container-filter" style={{ marginBottom: 20 }}>
            <button style={{marginRight: 20}} className="button-big" onClick={() => setFilter('all')}>All</button>
            <button style={{marginRight: 20}} className="button-big" onClick={() => setFilter('A')}>A</button>
            <button style={{marginRight: 20}} className="button-big" onClick={() => setFilter('B')}>B</button>
          </div>
        
          <div className="courses-rows" style={{ display: 'flex', flexWrap: 'wrap', gap: '30px' }}>
            {searchFilteredItems.length > 0 ? searchFilteredItems.map((item) => (
                    <Link to={`/course/${item.id}`} key={item.id}>
                      <FadeInWrapper>
                        <CourseCard 
                          title={`Title ${item.content}`} 
                          description={item.description} 
                          image={item.image} 
                          buttonText={item.buttonText}
                          buttonBgColor={item.buttonBgColor}
                          buttonTextColor={item.buttonTextColor}
                        />
                      </FadeInWrapper>
                    </Link>
                ))
                : <p>Course not found</p>  // Added this to show a message if no courses match the search
            }
          </div>
        </div>
        <Footer/>
      </FadeInWrapper>
    </div>
  );
}

export default CoursePage;
