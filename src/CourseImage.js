import React from 'react';
import backgroundImage from './outerspace.png';

const CourseImage = () => {
    return (
        <div style={{ 
            backgroundImage: `url(${backgroundImage})`,
            backgroundPosition: 'center', 
            backgroundSize: 'cover', 
            backgroundRepeat: 'no-repeat', 
            paddingLeft: 50, 
            paddingRight: 70, 
            paddingBottom: 60, 
            paddingTop: 200, 
            borderRadius: 30, 
            backgroundColor: 'white', 
            textAlign: 'left',
            justifyContent: 'flex-start'
        }}>
            <div className="two-sections" style={{display:'flex', justifyContent:'space-between',alignItem:'flex-start', justifyContent: 'space-around'}}>
                <div className="column-one">
                    <h1 className="header" style={{paddingBottom: 20, fontWeight:'600', fontSize: '18px', color:'white' }}  >• Benifits</h1>
                    <h1 className="body" style={{color: 'white', fontWeight:'800', fontSize: '50px'}}>Software with future design technology introductions and experience.</h1>
                </div>

                <div className="column-two" style={{justifyContent:'flex-end', display: 'flex'}}>
                </div>
            </div>
        </div>
    );
}

export default CourseImage;
