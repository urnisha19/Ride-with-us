import React, { useState } from 'react';
import GoogleMap from '../GoogleMap/GoogleMap';
import Header from '../Header/Header';
import './Destination.css';
import AvailableVehicleDetail from '../AvailableVehicleDetail/AvailableVehicleDetail';

const Destination = () => {
    const [place, setPlace] = useState({
        pickFrom: '',
        pickTo: ''
    })
    const [isFormShow, setIsFormShow] = useState(true);
    const handleOnBlur = (e) => {
        const destination = { ...place };
        destination[e.target.name] = e.target.value;
        setPlace(destination);
    }
    return (
        <div>
            <Header></Header>
            <p className="h1 text-center mb-5">Book and Reach Your Destination</p>

            <main className="content-layout container">
                <div className="content-left">
                    <div className="centered">
                        {
                            isFormShow ?
                                <form className="search-destination-form" onSubmit={() => setIsFormShow(false)}>
                                    <input type="address" className="destination-inputs" name="pickFrom" placeholder="Pick from" onBlur={handleOnBlur} required ></input>
                                    <input type="address" className="destination-inputs" name="pickTo" placeholder="Pick To" onBlur={handleOnBlur} required ></input>
                                    <input type="submit" variant="warning" className="search-btn my-4 font-weight-bold" />
                                </form>
                                :
                                <div>
                                    <h3 className="text-center text-info m-3">{place.pickFrom} To {place.pickTo}</h3>
                                    <AvailableVehicleDetail></AvailableVehicleDetail>
                                </div>
                        }
                    </div>
                </div>
                <div className="content-right">
                    <div className="centered">
                        <GoogleMap></GoogleMap>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default Destination;