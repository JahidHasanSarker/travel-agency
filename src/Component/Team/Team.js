import React from 'react';
import { Container } from 'react-bootstrap';
import './Team.css'


const Team = () => {
    return (
        <div>
            <Container>
                <div className="text-center my-5">
                    <h1 className="fw-bold">Meet The Guides</h1>
                    <p>Stop being afraid of what could go wrong, and start being excited of what could go right</p>
                </div>

                
                <div className="row">
                    <div className="col-xl-3 col-lg-3 col-md-6 mb-5">
                        <div className="wg-box-content">
    
                            <div className="wg-box-content-overlay"></div>
                                <img className="wg-box-content-image" src="https://designexpart.com/tm/html/bahon/assets/img/team/team-1.jpg" alt="" />
                            <div className="wg-box-content-details wg-box-fadeIn-bottom">
                                <h3 className="wg-box-content-title">Jahid Hasan</h3>
                                <p className="wg-box-content-text">Travel Guide (Asia)</p>
                            </div>

                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-3 col-md-6 mb-5">
                        <div className="wg-box-content">
    
                            <div className="wg-box-content-overlay"></div>
                                <img className="wg-box-content-image" src="https://designexpart.com/tm/html/bahon/assets/img/team/team-2.jpg" alt="" />
                            <div className="wg-box-content-details wg-box-fadeIn-bottom">
                                <h3 className="wg-box-content-title">Jasinda Mimi</h3>
                                <p className="wg-box-content-text">Travel Guide (Ocean)</p>
                            </div>

                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-3 col-md-6 mb-5">
                        <div className="wg-box-content">
    
                            <div className="wg-box-content-overlay"></div>
                                <img className="wg-box-content-image" src="https://designexpart.com/tm/html/bahon/assets/img/team/team-3.jpg" alt="" />
                            <div className="wg-box-content-details wg-box-fadeIn-bottom">
                                <h3 className="wg-box-content-title">Stiven Smith</h3>
                                <p className="wg-box-content-text">Travel Guide (Europe)</p>
                            </div>

                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-3 col-md-6 mb-5">
                        <div className="wg-box-content">
    
                            <div className="wg-box-content-overlay"></div>
                                <img className="wg-box-content-image" src="https://designexpart.com/tm/html/bahon/assets/img/team/team-4.jpg" alt="" />
                            <div className="wg-box-content-details wg-box-fadeIn-bottom">
                                <h3 className="wg-box-content-title">Molly Robinson</h3>
                                <p className="wg-box-content-text">Travel Guide (Africa)</p>
                            </div>

                        </div>
                    </div>

                </div>
                
               
            </Container>
            
        </div>
    );
};

export default Team;

 


/* <div>
                    <div className="row mx-auto">
                        <div className="col-xl-3 col-lg-3 col-md-6 mb-5 text-center img-clip">
                            <img src="https://designexpart.com/tm/html/bahon/assets/img/team/team-1.jpg" alt="" />
                        </div>
                        <div className="col-xl-3 col-lg-3 col-md-6 mb-5 text-center img-clip">
                        <img src="https://designexpart.com/tm/html/bahon/assets/img/team/team-2.jpg" alt="" />
                        </div>
                        <div className="col-xl-3 col-lg-3 col-md-6 mb-5 text-center img-clip">
                        <img src="https://designexpart.com/tm/html/bahon/assets/img/team/team-3.jpg" alt="" />
                        </div>
                        <div className="col-xl-3 col-lg-3 col-md-6 mb-5 text-center img-clip">
                        <img src="https://designexpart.com/tm/html/bahon/assets/img/team/team-4.jpg" alt="" />
                        </div>
                    </div>
                </div>  */