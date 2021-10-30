import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';

const TravelService = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/services')
        .then(res=> res.json())
        .then(data => {
            setServices(data.slice(0,6))
        })
    }, [])
    return (
        <div>
            <div id="cards_landscape_wrap-2">
            <h2 className="pt-5 fw-bold mb-4">Our Services</h2>
            <p>Professional customer consultation providing hassle-free travel and journey.<br/> Creative but determined approach to search for the most appropriate travel arrangements and<br/> accommodations and identifying the best possible values.</p>
            <div className="container">
                <div className="row">
                {
                services.map(service => <Service key={service._id} service={service}></Service>)
            }
                </div>
            </div>
        </div>
        </div>
    );
};

export default TravelService;