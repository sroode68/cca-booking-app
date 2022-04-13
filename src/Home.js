import Announcements from './AnnouncementScreen';
import './index.css';
import RoomListing from './RoomListing';
//import useFetch from './useFetch'
import { Link } from "react-router-dom";

//npx json-server --watch data/db.json --port 7000
const Home = () => {
  //const {data: Rooms} = useFetch('http://localhost:7000/Rooms');
  return (
    <div className="App">
      <h1>CCA Study Room Booking App</h1>
      {<Announcements/>}
      <div className='mybookingsbutton'>
        <Link to="/mybookings" style={{ 
            color: 'white', 
            backgroundColor: '#1929b3',
            borderRadius: '8px',
            fontSize: '50px',
          }}>My Bookings</Link>
      </div>
      <RoomListing/>
    </div>
  );
}

export default Home;