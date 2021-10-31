import axios from 'axios';
import React from 'react';
import { Container } from 'react-bootstrap';
import { useForm } from "react-hook-form";
import './AddNewService.css';

const AddNewService = () => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        axios.post('https://pacific-crag-75218.herokuapp.com/services', data)
        .then(res => {
            if (res.data.insertedId) {
                alert('Data Inserted SuccessFully');
                reset();
            }
        })
    };

    return (
        <div>
            <Container>
                <form onSubmit={handleSubmit(onSubmit)}>
                <div className="input-gap">
                        <input type="text" {...register("country" )} placeholder="country"/>
                        <input type="text" {...register("title" )} placeholder="title"/>
                        <input type="text" {...register("img" )} placeholder="img url"/>
                        <input type="number" {...register("duration")} placeholder="duration"/>
                        <input type="number" {...register("cost")} placeholder="cost"/>
                        <input className="input-btn" type="submit" value="Add Service"/>
                        
                </div>
                </form>
            </Container>
        </div>
    );
};

export default AddNewService;