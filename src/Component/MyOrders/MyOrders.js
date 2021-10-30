import React from 'react';
import { Button, Container, Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './MyOrders.css';

const MyOrders = () => {
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
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>Jahid Hasan</td>
                            <td>jahidhasan1695@email.com</td>
                            <td>Dhaka, Bangladesh</td>
                            <td>Turkey</td>
                            <td><Link to={`/orderPlaced/`}><Button variant="info">Edit</Button></Link></td>

                        </tr>
                    </tbody>
                </Table>
           </Container>
        </div>
    );
};

export default MyOrders;