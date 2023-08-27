function VideoComponent({ videoUrl }) {
    return (
        <div style={{
            width: '100%',  // Example fixed width
            height: '600px', // Example fixed height
            position: 'absolute', 
            top: 0, 
            left: 0,
            overflow: 'hidden',
        }}>
            <video autoPlay loop muted style={{ 
                width: '100%', 
                height: '100%', 
                position: 'absolute', 
                top: 0, 
                left: 0, 
                objectFit: 'cover', 
                zIndex: 0 
            }}>
                <source src={videoUrl} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            <div style={{
                content: '""',
                position: 'absolute',
                left: 0,
                top: 0,
                height: '100%',
                width: '100%',
                backgroundImage: 'linear-gradient(to right, black, transparent 100%)',
                zIndex: 1
            }} />
        </div>
    );
}

export default VideoComponent;
