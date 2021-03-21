import React from 'react';

const GoogleMap = () => {
    return (
        <div className="google-map-code">
            <iframe src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3746984.465708819!2d88.10026026270491!3d23.490583053663357!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30adaaed80e18ba7%3A0xf2d28e0c4e1fc6b!2sBangladesh!5e0!3m2!1sen!2sbd!4v1616232485090!5m2!1sen!2sbd`} width="100%" height="450" style={{ border: 0 }} allowfullscreen="" loading="lazy" title="google-map"/>
        </div>
    );
};

export default GoogleMap;