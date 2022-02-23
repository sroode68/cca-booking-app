import React from 'react';
import { Link } from 'react-router-dom';
import { useState } from "react";
import './index.css';

const RoomListing = () => {
    
    return(
        <div className="room1">
            <h1>Room 1:</h1>
            <Link to="room1" style={{ 
            color: 'white', 
            backgroundColor: '#1929b3',
            borderRadius: '8px',
            fontSize: '50px',
            
          }}>Room Information</Link>
        </div>
    );
}

export default RoomListing;