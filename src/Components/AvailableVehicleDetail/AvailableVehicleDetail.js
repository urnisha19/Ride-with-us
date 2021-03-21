import React from 'react';
import { useParams } from 'react-router-dom';
import vehicleData from '../../fakeData/vehicleData.json';
import './AvailableVehicleDetail.css';

const AvailableVehicleDetail = () => {
    const { id } = useParams();
    console.log(id);
    const availableVehicle = vehicleData.find(vehicle => vehicle.vehicle_name === id);
    console.log(availableVehicle);
    return (
        <div className="searched-info my-5">
            <h3>{availableVehicle.vehicle_name}</h3>
            <img src={availableVehicle.img} alt="" />
            <h4>Cost: {availableVehicle.cost}</h4>
            <h4>Passenger: {availableVehicle.passenger}</h4>
            <button className="booking-btn btn-success my-5">Book Now</button>
        </div>
    );
};

export default AvailableVehicleDetail;