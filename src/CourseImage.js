import React from 'react';
import VideoComponent from './VideoComponent'; // Assuming you have this component

const CourseImage = ({
    videoUrl,
    backgroundImg,
    background, // For plain color background
    gradient, // New prop for setting a gradient background
    text,
    headerText = "• Benefits",
    bodyFontSize = '50px',
    bgColor = 'white' // Default background color is set to white
}) => {
    let backgroundStyle = {};

    if (gradient) {
        backgroundStyle.background = gradient;
    } else if (backgroundImg) {
        backgroundStyle.backgroundImage = `url(${backgroundImg})`;
    } else if (background) {
        backgroundStyle.backgroundColor = background;
    }

    return (
        <div style={{ 
            ...backgroundStyle,
            backgroundPosition: 'center', 
            backgroundSize: 'cover', 
            backgroundRepeat: 'no-repeat', 
            paddingLeft: 50, 
            paddingRight: 70, 
            paddingBottom: 80, 
            paddingTop: 100, 
            backgroundColor: bgColor,
            textAlign: 'left',
            justifyContent: 'flex-start',
        }}>
            {videoUrl && <VideoComponent videoUrl={videoUrl} />}  {/* Render video if videoUrl is present */}
            <div className="two-sections" style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'flex-start',
                maxWidth: 1200,
                margin: 'auto',
                position: 'relative', // This is important for z-index to take effect
                zIndex: 1  // This ensures the content stays on top of the video
            }}>
                <div className="column-one">
                    <h1 className="header" style={{paddingBottom: 20, fontWeight:'600', fontSize: '15px', color:'white'}}>{headerText}</h1>
                    <h1 className="body" style={{color: 'white', fontWeight:'700', fontSize: bodyFontSize}}>{text}</h1>
                </div>
                <div className="column-two" style={{justifyContent:'flex-end', display: 'flex'}}>
                </div>
            </div>
        </div>
    );
}

export default CourseImage;
