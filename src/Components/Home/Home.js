import React from 'react';
import Header from '../Header/Header';
import vehiclesData from '../../fakeData/vehicleData.json';
import Vehicle from '../Vehicle/Vehicle';
import './Home.css';
import { Row } from 'react-bootstrap';
import bgImg from '../../images/Bg.png';
import './Home.css';

const Home = () => {
    const vehicles = vehiclesData;
    return (
        <div style={{ backgroundImage: `url(${bgImg})` }} className="home">
            <Header></Header>
            <div className="container">
                <Row>
                    {
                        vehicles.map(vehicle =>
                            <div className="col-md-3">
                                <Vehicle key={vehicle.vehicle_name} vehicle={vehicle} /></div>)
                    }
                </Row>
            </div>
        </div>
    );
};

export default Home;