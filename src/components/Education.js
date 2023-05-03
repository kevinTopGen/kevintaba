import React from 'react';
import './Education.css';

const Education = () => {
    return (
        <div className="jumbotron">
            <div className='container'>
                <p className='publications-header'>EDUCATION</p>

                <div style={{ display: 'flex', justifyContent: 'center' }}>



                    <div className="education-column">
                        <img src={require('./images/mayo.jpg')} />
                        <div className='education-view'>
                            <h5>Medical Doctor (MD) · Class of 2027</h5>
                            <h2>Mayo Clinic Alix School of Medicine</h2>
                        </div>
                    </div>

                    <div className="education-column">
                        <img src={require('./images/utaustin.jpeg')} />
                        <div className='education-view' style={{ backgroundColor: '#fff2e7' }}>
                            <h5 style={{ color: '#4e2300' }}>2021 Fulbright Killam Fellow</h5>
                            <h2 style={{ color: '#853d03' }}>The University of Texas at Austin</h2>
                        </div>
                    </div>

                    <div className="education-column">
                        <img src={require('./images/mcmaster.jpg')} />
                        <div className='education-view' style={{ backgroundColor: '#ffe7eb' }}>
                            <h5 style={{ color: '#460023' }}>Bachelor of Health Sciences, Honors (B.HSc)</h5>
                            <h2 style={{ color: '#7a003c' }}>McMaster University</h2>
                        </div>
                    </div>


                </div>
            </div>
        </div>
    );
};

export default Education;
