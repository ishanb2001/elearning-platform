import React from 'react';
import VideoComponent from './VideoComponent';

const CourseImage = ({
    videoUrl,
    backgroundImg,
    background, 
    gradient, 
    text,
    headerText = "• Benefits",
    bodyFontSize = '50px',
    bgColor = 'white'
}) => {

    const renderBackground = () => {
        if (videoUrl) {
            return (
                <VideoComponent videoUrl={videoUrl} style={{ width: '100%', height: 'auto' }} />
            );
        }

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
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                backgroundPosition: 'center', 
                backgroundSize: 'cover', 
                backgroundRepeat: 'no-repeat', 
                backgroundColor: bgColor,
                zIndex: 1,
            }} />
        );
    };

    return (
        <div style={{ 
            position: 'relative',
            overflow: 'hidden',
            textAlign: 'left',
            justifyContent: 'flex-start',
        }}>
            { renderBackground() }

            <div className="two-sections" style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'flex-start',
                maxWidth: 1200,
                margin: 'auto',
                position: 'relative', 
                zIndex: 2,
                alignItems: 'center',
                marginBottom: 140,
                marginTop: 140,
            }}>
                <div className="column-one">
                    <h1 className="header" style={{paddingBottom: 20, fontWeight:'600', fontSize: '15px', color:'white'}}>{headerText}</h1>
                    <h1 className="body" style={{letterSpacing: '-0.05em', color: 'white', fontWeight:'700', fontSize: bodyFontSize}}>{text}</h1>
                </div>
                <div className="column-two" style={{justifyContent:'flex-end', display: 'flex'}}>
                </div>
            </div>
        </div>
    );
}

export default CourseImage;
