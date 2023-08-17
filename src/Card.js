import React from 'react';
import backgroundImage from './woman-happy.png';

const TextNearTop = () => {
    return (
        <div style={{ 
            
            backgroundPosition: 'center', 
            backgroundSize: 'cover', 
            backgroundRepeat: 'no-repeat',  
            borderRadius: 30, 
            textAlign: 'left'
        }}>
            <div className="two-sections" style={{display:'flex', alignItems: 'center', justifyContent:'space-between', justifyContent: 'space-around'}}>
                

                <div className="column-two" style={{ display: 'flex'}}>
                    {<img src={backgroundImage} style={{width:'80%'}} alt="Background"/>}
                </div>

                <div className="column-one">
                    <h1 className="header">BENIFITS</h1>
                    <h1>The currently involved users who are creating the application.</h1>
                    <p class="body">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                    <button className="button-big">Button 2</button>
                </div>
            </div>
        </div>
    );
}

export default TextNearTop;
