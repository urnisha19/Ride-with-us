/* eslint-disable no-unused-vars */
import React from 'react';
import { Link, useParams } from 'react-router-dom';

const Vehicle = ({ vehicle }) => {
    const {id } = useParams();
    const { vehicle_name, img, description } = vehicle;
    return (
        <div className="card h-100">
            <Link to={`/Destination/${vehicle_name}`} style={{ textDecoration: 'none' }}>
                <img src={img} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title" >{vehicle_name}</h5>
                    <p className="card-text">{description}</p>
                </div>
            </Link>
        </div >

    );
};

export default Vehicle;