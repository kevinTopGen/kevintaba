import React from 'react';
import './Publications.css';

const Publications = () => {
    return (
        <div className="jumbotron">
            <div className='container'>

                <p className='publications-header'>PUBLICATIONS</p>

                <div className="publication-row">
                    <img src={require('./images/nature.jpg')} />
                    <div className='publication-view'>
                        <div style={{ display: 'flex', flexDirection: 'column', textAlign: 'left' }}>
                            <h5>MAR 17 2023 · Nature Medicine</h5>
                            <h3>Diagnostic classification of childhood cancer using multiscale transcriptomics</h3>
                        </div>
                        <div className='pub-med-div'>
                            <p>PubMed</p>
                        </div>
                    </div>
                </div>

                <div className="publication-row">
                    <img src={require('./images/amia.png')} />
                    <div className='publication-view'>
                        <div style={{ display: 'flex', flexDirection: 'column', textAlign: 'left' }}>
                            <h5>MAY 23 2022 · AMIA Annual Symposium Proceedings</h5>
                            <h3>An Informatics Analysis to Identify Sex Disparities and Healthcare Needs for Autism across the United States</h3>
                        </div>
                        <div className='pub-med-div'>
                            <p>PubMed</p>
                        </div>
                    </div>
                </div>

                <div className="publication-row">
                    <img src={require('./images/biodatamining.png')} />
                    <div className='publication-view'>
                        <div style={{ display: 'flex', flexDirection: 'column', textAlign: 'left' }}>
                            <h5>MAR 20 2021 · BioData Mining</h5>
                            <h3>Indels in SARS-CoV-2 occur at template-switching hotspots</h3>
                        </div>
                        <div className='pub-med-div'>
                            <p>PubMed</p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Publications;
