import React from 'react';
import { Link } from 'react-router-dom';
import './index.css';


const RoomListing = () => {
    
    return(
        <div className="roomlisting">
          <div classname="room1">
          <h1>Room 1:</h1>
            <Link to="room1" style={{ 
            color: 'white', 
            backgroundColor: '#1929b3',
            borderRadius: '8px',
            fontSize: '50px',
            
          }}>Room Information</Link>
          </div>
          <div className="room2">
          <h1>Room 2:</h1>
            <Link to="room2" style={{ 
            color: 'white', 
            backgroundColor: '#1929b3',
            borderRadius: '8px',
            fontSize: '50px',
            
          }}>Room Information</Link>
          </div>
          <div className="room3">
            <h1>Room 3:</h1>
                <Link to="room3" style={{ 
                color: 'white', 
                backgroundColor: '#1929b3',
                borderRadius: '8px',
                fontSize: '50px',
                
            }}>Room Information</Link>
          </div>
          <div className="room4">
          <h1>Room 4:</h1>
                <Link to="room4" style={{ 
                color: 'white', 
                backgroundColor: '#1929b3',
                borderRadius: '8px',
                fontSize: '50px',
                
            }}>Room Information</Link>
          </div>
        </div>
    
    );
}

export default RoomListing;