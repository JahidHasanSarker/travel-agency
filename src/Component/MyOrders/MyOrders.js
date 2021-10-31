import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Button, Container, Table } from 'react-bootstrap';
import useAuth from '../../Hook/useAuth';
import './MyOrders.css';

const MyOrders = () => {


    const { user } = useAuth();
    const [services, setServices] = useState([]);
        useEffect(() => {
          fetch("https://pacific-crag-75218.herokuapp.com/orders")
            .then(response => response.json())
            .then(data => setServices(data));
        }, []);

        const handleDeleteOrder = (id) => {
            console.log(id);
        
            const proceed = window.confirm('Are you Sure you want to delted ?')
            if (proceed) {
                axios.delete(`https://pacific-crag-75218.herokuapp.com/orders/${id}`)
            .then(res => {
                if (res.data.deletedCount > 0) {
                    alert('deleted successfully');
                    const remainingUser = services.filter(service => service._id !== id)
                    setServices(remainingUser); 
    
                }
            })
            }
          };





    return (
        <div className ="my-5">
            <Container>
                <Table className="text-center" striped bordered hover>
                    <thead>
                        <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Address</th>
                        <th>Destination</th>
                        <th>Action</th>
                        <th>Status</th>

                        </tr>
                    </thead>
                    <tbody>
                   {
                       services.filter(service => service.email === user.email).map((service, index) =>  
                        <tr>
                            <td>{index + 1}</td>
                            <td>{service.name}</td>
                            <td>{service.email}</td>
                            <td>{service.address}</td>
                            <td>{service.destination}</td>
                            <td><Button variant="danger" onClick={() => handleDeleteOrder(service._id)}>Delete</Button></td>
                            <td>{service.status}</td>

                        </tr>
                    )
                }
                </tbody>
                </Table>
           </Container>
        </div>
    );
};

export default MyOrders;