import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { useForm } from "react-hook-form";
import './OrderPlaced.css';
import axios from 'axios';

const OrderPlaced = () => {
    const {id} = useParams();
    const [data, setData] = useState([]);

    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const onSubmit = data => {
        axios.post('https://pacific-crag-75218.herokuapp.com/orders', data)
            .then(res => {
                if (res.data.insertedId) {
                alert('Thank You for Booking');
                reset();
        }
    })
    };


    useEffect(()=>{
        fetch(`https://pacific-crag-75218.herokuapp.com/services`)
        .then(res => res.json())
        .then(data => setData(data))
        
    },[])

    const ExactIteam = data.filter(td => td._id === id);

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
                        <h2 className="text-center text-white fw-bolder">Your Travel Service Information Here</h2>
                    </div>

            <div>
                <Container>
                    <div className="row d-flex my-5 section">
                        <div className="col-lg-4 col-md-4 col-12 order-img mb-5">
                            <img src={ExactIteam[0]?.img} alt="" />
                        </div>
                        <div className="col-lg-4 col-md-4 col-12 py-5 order-text">
                            <h4 className="pt-4 fw-bold mb-4">You Are Choosing {ExactIteam[0]?.country}</h4>
                            <p>Because we ensure that your traveling is filled with joy, excitement, pleasure, and satisfaction, which you won’t get from anywhere else, and we are keeping it cost effective for you. We are linked up with the best hotels, airlines and food restaurants so that your luxury is guaranteed.</p>
                            <p>Duration: {ExactIteam[0]?.duration} Days</p>
                            <p>Cost: ${ExactIteam[0]?.cost}</p>
                        </div>
                        <div className="col-lg-4 col-md-4 col-12 bg-color">
                            <h2 className="text-center text-white fw-bold pt-3">Book The Tour</h2>
                        <form onSubmit={handleSubmit(onSubmit)}>
                           
                            
                           <div className="input-style py-3">
                                <input {...register("name", { required: true })} placeholder="Your Name"/>
                                {/* errors will return when field validation fails  */}
                                <input {...register("email", { required: true })} placeholder="Your Email"/>
                                <input {...register("destination", { required: true })} placeholder="Your Destination" value={ExactIteam[0]?.country} />
                                {/* errors will return when field validation fails  */}
                                <input {...register("address", { required: true })} placeholder="Your Address"/>
                                {/* errors will return when field validation fails  */}
                                <textarea {...register("description", { required: true })} placeholder="Description"/>
                                {errors.exampleRequired && <span className="text-warning">This field is required</span>}
      
                                <input className="submit-btn" type="submit" value="Booked"/>
                           </div>
                                                        
                        </form>
                    </div>
                        
                    </div>
                    
                </Container>
            </div>
           
        </div>
    );
};

export default OrderPlaced;