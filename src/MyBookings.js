import { Link } from "react-router-dom";

const MyBookings = () => {
    return(
        <div className="mybookings">
            <Link to="/" style={{
                  color: 'white', 
                  backgroundColor: '#1929b3',
                  borderRadius: '8px',
            }
            }>Home</Link>
            <h1>My Reservations:</h1>
        </div>
    );
}

export default MyBookings;