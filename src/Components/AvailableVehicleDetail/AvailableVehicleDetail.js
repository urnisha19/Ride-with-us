import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import vehicleData from '../../fakeData/vehicleData.json';
import './AvailableVehicleDetail.css';
import BookingConfirmation from '../BookingConfirmation/BookingConfirmation';

const AvailableVehicleDetail = () => {
    const { id } = useParams();
    console.log(id);
    const availableVehicle = vehicleData.find(vehicle => vehicle.vehicle_name === id);
    console.log(availableVehicle);
    const [isBooked, setIsBooked] = useState(false);

    return (
        <div>
            {
                (!isBooked) ?
                    <div className="searched-info">
                        <h3>{availableVehicle.vehicle_name}</h3>
                        <img src={availableVehicle.img} alt="" />
                        <h4>Cost: {availableVehicle.cost}</h4>
                        <h4>Passenger: {availableVehicle.passenger}</h4>
                        <button className="booking-btn btn-success my-5" onClick={() =>setIsBooked(true)}>Book Now</button>
                    </div>
                    :
                    <BookingConfirmation></BookingConfirmation>
            }
        </div>
    );
};

export default AvailableVehicleDetail;