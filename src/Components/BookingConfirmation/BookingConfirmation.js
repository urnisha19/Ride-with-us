import { faCheckCircle } from '@fortawesome/free-regular-svg-icons';
import { faMapMarked } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './BookingConfirmation.css';

const BookingConfirmation = () => {
    
    return (
        <div className="confirmation-area confirmation text-center mt-5">
            <h1 class="confirmed-sign text-center mt-5"><FontAwesomeIcon icon={faCheckCircle}></FontAwesomeIcon></h1>
            <h2>Your booking has been confirmed!</h2>
            <div className="billing-area mt-5">
                <h3>Stay Connected <FontAwesomeIcon icon={faMapMarked}/> </h3>
            </div>
        </div>
    );
};

export default BookingConfirmation;