import React from 'react';
import backgroundImage from './woman-happy.png';

const TextNearTop = () => {
    return (
        <div style={{ 
            
            backgroundPosition: 'center', 
            backgroundSize: 'cover', 
            backgroundRepeat: 'no-repeat', 
            paddingLeft: 50, 
            paddingRight: 70, 
            paddingBottom: 50, 
            paddingTop: 80, 
            borderRadius: 30, 
            backgroundColor: 'white', 
            textAlign: 'left'
        }}>
            <div className="two-sections" style={{display:'flex', justifyContent:'space-between',alignItem:'flex-start', justifyContent: 'space-around'}}>
                <div className="column-one">
                    <h1 className="header" style={{paddingBottom: 20, fontWeight:'600', fontSize: '18px', color:'#635bff' }}  >• Benifits</h1>
                    <h1 className="header" style={{fontWeight:'500', fontSize: '50px'}}  >What We Offer</h1>
                    <p style={{ color:'#425466', marginTop:30, marginBottom: 30, fontSize:20, lineHeight: 1.5}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                </div>

                <div className="column-two" style={{justifyContent:'flex-end', display: 'flex'}}>
                    {<img src={backgroundImage} style={{width:'80%'}} alt="Background"/>}
                </div>
            </div>
        </div>
    );
}

export default TextNearTop;
