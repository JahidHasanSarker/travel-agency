import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Button, Container, Table } from 'react-bootstrap';
//import { Link } from 'react-router-dom';
import './ManageAllOrders.css';

const ManageAllOrders = () => {

    const [orders, setOrders] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/orders')
        .then(res => res.json())
        .then(data => setOrders(data))
    }, [])
    
    

    const handleDelete = id => {

        const proceed = window.confirm('Are you Sure you want to deleted ?')
            if (proceed) {
                axios.delete(`http://localhost:5000/orders/${id}`)
            .then(res => {
                if (res.data.deletedCount > 0) {
                    alert('deleted successfully');
                    const remainingUser = orders.filter(order => order._id !== id)
                    setOrders(remainingUser); 
    
                }
            })
            }
    
    }
    


    return (
        <div className="my-5">
           <Container>
           <Table striped bordered hover className="text-center mt-5">

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
                orders.map((order, index) => 
                    <tr key={order._id}>
        
                        <td>{index + 1}</td>
                        <td>{order.name}</td>
                        <td>{order.email}</td>
                        <td>{order.address}</td>
                        <td>{order.destination}</td>
                        <td><Button onClick={() => handleDelete(order._id)} variant="danger">Delete</Button> <Button variant="success">Aporove</Button></td>
                        <td>Pending</td>
                        
                    </tr>)
            }
</tbody>

</Table>
           </Container>
        </div>
    );
};

export default ManageAllOrders;


//<Link to={`/users/update/${user._id}`}><Button variant="primary">Edit</Button></Link>