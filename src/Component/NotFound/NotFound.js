import React from 'react';
import { Button, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './NotFound.css';
const NotFound = () => {
    return (
        <div>
           <div className="img-overlay">
                <div className="overlay-padding">
                    <div className="notfound-img">
                        <img src="https://tevily-html.vercel.app/assets/images/backgrounds/page-header-bg.jpg" alt="" />
                    </div>
                    <div className="bg-overlay"></div>
                </div>
           </div>
                    <div className="img-text">
                        <h2 className="text-center text-white fw-bolder">Not Found Page</h2>
                    </div>
            <Container>
                        
                <div className="text-center py-5">
                    <div className="py-3">
                        <img className="py-3" src="https://templates.envytheme.com/medip/default/assets/images/error.png" alt="" />
                    </div>
                    <div className="py-3">
                        <h3>Error 404 : Page Not Found</h3>
                        <p>The page you are looking for might have been removed had its name<br/> changed or is temporarily unavailable.</p>
                    </div>
                        <Link to="/home"><Button className="mb-5" variant="outline-info">Home</Button></Link>
                </div>  

            </Container>
        </div>
    );
};

export default NotFound;