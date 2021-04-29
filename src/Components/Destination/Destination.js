import React, { useState } from 'react';
import Header from '../Header/Header';
import './Destination.css';
import AvailableVehicleDetail from '../AvailableVehicleDetail/AvailableVehicleDetail';
import Map from '../GoogleMap/Map'

const Destination = () => {
    const [origin, setOrigin] = useState('');
    const [destination, setDestination] = useState('');
    const [isFormShow, setIsFormShow] = useState(true);

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
                                    <input type="address" className="destination-inputs" name="pickFrom" placeholder="Pick from" onBlur={e=>setOrigin(e.target.value)} required ></input>
                                    <input type="address" className="destination-inputs" name="pickTo" placeholder="Pick To" onBlur={e=>setDestination(e.target.value)} required ></input>
                                    <input type="submit" variant="warning" className="search-btn my-4 font-weight-bold" />
                                </form>
                                :
                                <div>
                                    <h3 className="text-center text-info m-3">{origin} To {destination}</h3>
                                    <AvailableVehicleDetail></AvailableVehicleDetail>
                                </div>
                        }
                    </div>
                </div>
                <div className="content-right">
                    <div className="centered">
                        {/* <GoogleMap></GoogleMap> */}
                        <Map origin={origin} destination={destination}></Map>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default Destination;