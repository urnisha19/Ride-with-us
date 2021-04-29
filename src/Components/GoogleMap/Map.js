import { DirectionsRenderer, DirectionsService, GoogleMap, LoadScript } from '@react-google-maps/api';
import React, { useState } from 'react'

const containerStyle = {
    margin: '4em',
    width: '500px',
    height: '400px'
};

const location = {
    lat: -3.745,
    lng: -38.523
};

const Map = (origin, destination) => {
    const [directionResponse, setDirectionResponse] = useState(null);

    return (
        <LoadScript
            googleMapsApiKey="YOUR_API_KEY"
        >
            <GoogleMap
                mapContainerStyle={containerStyle}
                center={location}
                zoom={10}
            >
                {
                    origin !== '' && destination !== '' && <DirectionsService
                        // required
                        options={{
                            destination: destination,
                            origin: origin,
                            travelMode: 'DRIVING'
                        }}
                        // required
                        callback={res => {
                            if (res != null) {
                                setDirectionResponse(res);
                            }
                        }}
                    />
                }
                {
                    directionResponse && <DirectionsRenderer
                        // required
                        options={{
                            directions: directionResponse
                        }}
                    />
                }
            </GoogleMap>
        </LoadScript>
    )
}

export default React.memo(Map);