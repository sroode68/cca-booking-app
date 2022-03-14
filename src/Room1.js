import { Link } from "react-router-dom";
import React, { useEffect, useState } from 'react'
import axios from "axios";
const Room1 = () => {
    
    const [showButton9, setShowButton9] = useState(true)
    const [showButton10, setShowButton10] = useState(true)
    const [showButton11, setShowButton11] = useState(true)
    const [showButton12, setShowButton12] = useState(true)
    const [showButton1, setShowButton1] = useState(true)
    const [showButton2, setShowButton2] = useState(true)
    const [showButton3, setShowButton3] = useState(true)

    const updateTime = (time, room) => {
        const url = "http://localhost:7000/RoomTimes/";
        //axios.put(url, false)
       // .then(response =>{
       //   console.log(response.room1)
       // })
    }

    useEffect(() => {
        fetch('http://localhost:7000/RoomTimes')
          .then((response) => response.json())
          .then((response) => {
            console.log(response.room1[0].Nine)
            console.log(response.room1[0].Ten)
            if(response.room1[0].Nine === true){
              setShowButton9(true)
            } 
            if(response.room1[0].Nine === false){
              setShowButton9(false);
            }

            if(response.room1[0].Ten === true){
                setShowButton10(true)
            } 
            if(response.room1[0].Ten === false){
              setShowButton10(false);
            }
            if(response.room1[0].Eleven === true){
              setShowButton11(true)
            } 
            if(response.room1[0].Eleven === false){
              setShowButton11(false);
            }

            if(response.room1[0].Twelve === true){
                setShowButton12(true)
            } 
            if(response.room1[0].Twelve === false){
              setShowButton12(false);
            } 
            if(response.room1[0].One === true){
              setShowButton1(true)
          } 
          if(response.room1[0].One === false){
            setShowButton1(false);
          }
          if(response.room1[0].Two === true){
            setShowButton2(true)
          } 
          if(response.room1[0].Two === false){
            setShowButton2(false);
          }

          if(response.room1[0].Three === true){
              setShowButton3(true)
          } 
          if(response.room1[0].Three === false){
            setShowButton3(false);
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
                {showButton9 && <button onClick={updateTime("Nine", "room1")}>9:00</button>}
                {showButton10 && <button onClick={updateTime("Ten", "room1")}>10:00</button>}
                {showButton11 && <button onClick={updateTime("Eleven", "room1")}>11:00</button>}
                {showButton12 && <button onClick={updateTime("Twelve", "room1")}>12:00</button>}
                {showButton1 && <button onClick={updateTime("One", "room1")}>1:00</button>}
                {showButton2 && <button onClick={updateTime("Two", "room1")}>2:00</button>}
                {showButton3 && <button onClick={updateTime("Three", "room1")}>3:00</button>}
            </div>
        </div>
    );
}

export default Room1;