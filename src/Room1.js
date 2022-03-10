import { Link } from "react-router-dom";
import React, { useEffect, useState } from 'react'
import axios from "axios";
const Room1 = () => {
    
    const [showButton, setShowButton] = useState(true)

    const updateTime = (time, room) => {
        const url = "http://localhost:7000/RoomTimes/"+ time;
        axios.put(url, false).then(response =>{
          console.log("Update successful")
        })
    }

    useEffect(() => {
        fetch('http://localhost:7000/RoomTimes')
          .then((response) => response.json())
          .then((response) => {
            console.log(response['room1'].Nine)
            if(response === true){
              setShowButton(true)
            } 
            if(response === false){
              setShowButton(false);
            }

            if(response.Ten === true){
                setShowButton(true)
              } 
              if(response.Ten === false){
                setShowButton(false);
              }
              
          })
      }, []);

    return(
        <div className="room-info">
           <Link to="/" style={{
                  color: 'white', 
                  backgroundColor: '#1929b3',
                  borderRadius: '8px'
            }
            }>Home</Link>
            <h1>Room 1</h1>
            <h2>The room connecting to the main hallway</h2>
            <img src="http://s3-us-west-2.amazonaws.com/sportshub2-uploads-prod/files/sites/209/2017/08/03065505/851.png" alt="hse logo" width="800" height="500"></img>
            <h2>Ammenities Offered:</h2>
            <ul>
                <li>Large TV</li>
                <li>Multiple HDMI Ports</li>
                <li>HDMI Cable</li>
                <li>Large table with chairs</li>
                <li>Whiteboard wall with markers</li>
            </ul>
            <div className="timeslot">
              
            </div>
            <div className="timeslots">
                <h1>Book a time!</h1>
                {showButton && <button onClick={updateTime("Nine", "room1")}>9:00</button>}
                {showButton && <button onClick={updateTime("Ten", "room1")}>10:00</button>}
                <button>11:00 AM</button>
                <button>12:00 PM</button>
                <button>1:00 PM</button>
                <button>2:00 PM</button>
                <button>3:00 PM</button>
            </div>
        </div>
    );
}

export default Room1;