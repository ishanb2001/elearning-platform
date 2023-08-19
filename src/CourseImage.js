import React from 'react';

const CourseImage = ({
    backgroundImg,
    text,
    headerText = "• Benefits",
    bodyFontSize = '50px',
    bgColor = 'white' // Default background color is set to white
}) => {
    return (
        <div style={{ 
            backgroundImage: `url(${backgroundImg})`,
            backgroundPosition: 'center', 
            backgroundSize: 'cover', 
            backgroundRepeat: 'no-repeat', 
            paddingLeft: 50, 
            paddingRight: 70, 
            paddingBottom: 80, 
            paddingTop: 100, 
            backgroundColor: bgColor, // Using the bgColor prop here
            textAlign: 'left',
            justifyContent: 'flex-start'
        }}>
            <div className="two-sections" style={{display:'flex', justifyContent:'space-between', alignItems:'flex-start', maxWidth: 1200, margin:'auto'}}>
                <div className="column-one">
                    <h1 className="header" style={{paddingBottom: 20, fontWeight:'600', fontSize: '18px', color:'white'}}>{headerText}</h1>
                    <h1 className="body" style={{color: 'white', fontWeight:'800', fontSize: bodyFontSize}}>{text}</h1>
                </div>
                <div className="column-two" style={{justifyContent:'flex-end', display: 'flex'}}>
                </div>
            </div>
        </div>
    );
}

export default CourseImage;
