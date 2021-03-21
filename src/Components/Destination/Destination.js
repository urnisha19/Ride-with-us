import React from 'react';
import GoogleMap from '../GoogleMap/GoogleMap';
import Header from '../Header/Header';
import './Destination.css';

const Destination = () => {
    return (
        <div>
            <Header></Header>
            <p className="h1 text-center mb-5">Book and Reach Your Destination</p>
            <main className="content-layout container">
                <div  className="content-left">
                    <div className="centered">
                    <h1>form</h1>
                    <form className="search-destination-form">
                        <input type="address" className="destination-inputs" name="pick-from" placeholder="Pick from" required ></input>
                        <input type="address" className="destination-inputs" name="pick-to" placeholder="Pick To" required ></input>
                        <input type="submit" variant="warning" className="search-btn my-4 font-weight-bold"/>
                    </form>
                    </div>
                </div>
                <div  className="content-right">
                   <div className="centered">
                   <GoogleMap></GoogleMap>
                   </div>
                </div>
            </main>
        </div>
    );
};

export default Destination;