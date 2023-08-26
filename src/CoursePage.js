import React, { useState } from 'react';
import './App.css';
import CourseCard from './CourseCard';
import editImage from './video-editing.jpg'; 
import Home from './Home';
import CourseImage from './CourseImage';
import FadeInWrapper from './FadeInWrapper';
import Footer from './Footer';

function CoursePage() {
  const [filter, setFilter] = useState('all');

  const items = [
    { 
      id: 1, 
      category: 'A', 
      content: '1',
      image: editImage,
      description: 'This is the description for item 1',
      buttonText: 'Button 1',
      buttonBgColor: 'red',
      buttonTextColor: 'white'
    },
    { 
      id: 2, 
      category: 'A', 
      content: '2',
      image: editImage,
      description: 'This is the description for item 2',
      buttonText: 'Button 2',
      buttonBgColor: 'blue',
      buttonTextColor: 'yellow'
    },
    { id: 3, category: 'B', content: '3' },
    { id: 5, category: 'B', content: '4' },
    { id: 6, category: 'A', content: '5' },
    { id: 7, category: 'B', content: '6' },
    { id: 8, category: 'B', content: '7' }
  ];

  const filteredItems = filter === 'all' ? items : items.filter(item => item.category === filter);

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
      
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '30px', justifyContent: 'flex-start' }}>
    {items.map((item) => (
        (filter === 'all' || filter === item.category) && 
        <FadeInWrapper key={item.id}>
            <CourseCard 
                title={`Title ${item.content}`} 
                description={item.description} 
                image={item.image} 
                buttonText={item.buttonText} // Passing buttonText
                buttonBgColor={item.buttonBgColor} // Passing buttonBgColor
                buttonTextColor={item.buttonTextColor} // Passing buttonTextColor
            />
        </FadeInWrapper>
    ))}
</div>

      </div>
      <Footer/>
      </FadeInWrapper>
    </div>
    
  );
}

export default CoursePage;
