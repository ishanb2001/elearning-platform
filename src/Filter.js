import React, { useState } from 'react';
import './App.css';
import CourseCard from './CourseCard';
import editImage from './video-editing.jpg';
import anotherImage from './outerspace.png';
import DataAnalyst from './data-analyst.png';
import ManThinking from './man-thinking.png';
import BrainStorming from './brainstorming.png';
import { Link } from 'react-router-dom';
import FadeInWrapper from './FadeInWrapper';

const CourseCategories = () => {
    const [filter, setFilter] = useState('all');

    const items = [
        {
            id: 1,
            category: 'A',
            title: "Product Design",
            description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
            image: DataAnalyst
        },
        {
            id: 2,
            category: 'A',
            title: "Computer Science",
            description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
            image: ManThinking
        },
        {
            id: 3,
            category: 'B',
            title: "Computer Science",
            description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
            image: BrainStorming
        }
    ];

    const filteredItems = filter === 'all' ? items : items.filter(item => item.category === filter);

    return (
        <>
            <div className="filter-wrapper" style={{ marginTop: 100, marginBottom: 100, borderRadius: 30, backgroundColor: 'white' }}>
                <h1 className="header" style={{ fontWeight: '600', color: '#635bff' }}>WHATS TRENDING?</h1>
                <h1>Expand Yourself In Data Analytics</h1>

                <div className="button-container-filter">
                    <button style={{ marginRight: 20 }} className="button-big" onClick={() => setFilter('all')}>All</button>
                    <button style={{ marginRight: 20 }} className="button-big" onClick={() => setFilter('A')}>A</button>
                    <button style={{ marginRight: 20 }} className="button-big" onClick={() => setFilter('B')}>B</button>
                </div>

                <div className="card-container-trending">
                    {filteredItems.map(item => (
                      <FadeInWrapper key={item.id}>
                        <CourseCard key={item.id} title={item.title} description={item.description} image={item.image} />
                        </FadeInWrapper>
                    ))}
                    
                </div>

                <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
                    <Link to="/CoursePage" className="button-big-s" style={{ textDecoration: 'none' }}>
                        View More Courses →
                    </Link>
                </div>
            </div>
        </>
    );
};

export default CourseCategories;
