import Announcements from './AnnouncementScreen';
import './index.css';
import RoomListing from './RoomListing';
import { Link } from "react-router-dom";

//Run the command to start up the server: npx json-server --watch data/db.json --port 7000
const Home = () => {
  return (
    //Compilation of react components to form the home screen
    <div className="App">
      <h1>CCA Study Room Booking App</h1>
      {/*Announcement component*/}
      {<Announcements/>}
      {/*My Bookings component*/}
      <div className='mybookingsbutton'>
        <Link to="/mybookings" style={{ 
            color: 'white', 
            backgroundColor: '#1929b3',
            borderRadius: '8px',
            fontSize: '50px',
          }}>My Bookings</Link>
      </div>
      {/*Room Listing component*/}
      <RoomListing/>
    </div>
  );
}

export default Home;

