import { Link } from "react-router-dom";
import React, { useEffect, useState } from 'react'
import axios from "axios";
const Room1 = () => {
    
    //Variables for the timeslot buttons
    const [showButton9, setShowButton9] = useState(true)
    const [showButton10, setShowButton10] = useState(true)
    const [showButton11, setShowButton11] = useState(true)
    const [showButton12, setShowButton12] = useState(true)
    const [showButton1, setShowButton1] = useState(true)
    const [showButton2, setShowButton2] = useState(true)
    const [showButton3, setShowButton3] = useState(true)

    //These functions update the timeslots when a user books the time, it makes the timeslot disapear (time is false on database) as well as updateing the other times

    const updateTime9 = (room) => {

        //Hides the 9:00 button after being clicked
        setShowButton9(false)

        //Updates the database to display false after being clicked to signifiy it's booked
        var timeInfo = {
            "Nine": false,
            "Ten": showButton10,
            "Eleven": showButton11,
            "Twelve": showButton12,
            "One": showButton1,
            "Two": showButton2,
            "Three": showButton3,
            "id": room,
            "name": "K102A"
        };

        //Sends it to the json server via axios
       const url = "http://localhost:7000/Rooms/"+room;
       axios.put(url, timeInfo).then(response =>{
          console.log(showButton9) 
       }
       )
    }


    //Same thing as the function above just for the 10:00 times etc, etc. Repeat for all updateTime functions
    const updateTime10 = (room) => {

        setShowButton10(false)

        var timeInfo = {
            "Nine": showButton9,
            "Ten": false,
            "Eleven": showButton11,
            "Twelve": showButton12,
            "One": showButton1,
            "Two": showButton2,
            "Three": showButton3,
            "id": room,
            "name": "K102A"
        };

       const url = "http://localhost:7000/Rooms/"+room;
       axios.put(url, timeInfo).then(response =>{
          console.log(showButton10) 
       }
       )
    }

    
    const updateTime11 = (room) => {

        setShowButton11(false)

        var timeInfo = {
            "Nine": showButton9,
            "Ten": showButton10,
            "Eleven": false,
            "Twelve": showButton12,
            "One": showButton1,
            "Two": showButton2,
            "Three": showButton3,
            "id": room,
            "name": "K102A"
        };

       const url = "http://localhost:7000/Rooms/"+room;
       axios.put(url, timeInfo).then(response =>{
          console.log(showButton11) 
       }
       )
    }

    const updateTime12 = (room) => {
        setShowButton12(false)
        var timeInfo = {
            "Nine": showButton9,
            "Ten": showButton10,
            "Eleven": showButton11,
            "Twelve": false,
            "One": showButton1,
            "Two": showButton2,
            "Three": showButton3,
            "id": room,
            "name": "K102A"
        };
       const url = "http://localhost:7000/Rooms/"+room;
       axios.put(url, timeInfo).then(response =>{
          console.log(showButton12) 
       }
       )
    }

    const updateTime1 = (room) => {
        setShowButton1(false)
        var timeInfo = {
            "Nine": showButton9,
            "Ten": showButton10,
            "Eleven": showButton11,
            "Twelve": showButton12,
            "One": false,
            "Two": showButton2,
            "Three": showButton3,
            "id": room,
            "name": "K102A"
        };
       const url = "http://localhost:7000/Rooms/"+room;
       axios.put(url, timeInfo).then(response =>{
          console.log(showButton1) 
       }
       )
    }

    const updateTime2 = (room) => {
        setShowButton2(false)
        var timeInfo = {
            "Nine": showButton9,
            "Ten": showButton10,
            "Eleven": showButton11,
            "Twelve": showButton12,
            "One": showButton1,
            "Two": false,
            "Three": showButton3,
            "id": room,
            "name": "K102A"
        };
       const url = "http://localhost:7000/Rooms/"+room;
       axios.put(url, timeInfo).then(response =>{
          console.log(showButton2) 
       }
       )
    }

    const updateTime3 = (room) => {
        setShowButton3(false)
        var timeInfo = {
            "Nine": showButton9,
            "Ten": showButton10,
            "Eleven": showButton11,
            "Twelve": showButton12,
            "One": showButton1,
            "Two": showButton2,
            "Three": false,
            "id": room,
            "name": "K102A"
        };
       const url = "http://localhost:7000/Rooms/"+room;
       axios.put(url, timeInfo).then(response =>{
          console.log(showButton3) 
       }
       )
    }

    //Fetches all of the timeslots when a user opens the page
    const getTimes = (room) => {
      const url = "http://localhost:7000/Rooms/"+room;
      axios.get(url).then(response=>{
        setShowButton9(response.data.Nine);
        setShowButton10(response.data.Ten);
        setShowButton11(response.data.Eleven);
        setShowButton12(response.data.Twelve);
        setShowButton1(response.data.One);
        setShowButton2(response.data.Two);
        setShowButton3(response.data.Three);
    })
    }

    //Constantly fetches timeslots everytime the page is refreshed
    useEffect(() => {
        getTimes("room1")             
    }, []);

    return(
        //Styling design of the room page (ammenities, name, location, etc)
        <div className="room-info">
           <Link to="/" style={{
                  color: 'white', 
                  backgroundColor: '#1929b3',
                  borderRadius: '8px'
            }
            //Room info
            }>Home</Link>
            <h1>Room K102A</h1>
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
            {/*Timeslot list when clicked starts up the update time function*/}
            <div className="timeslots">
                <h1>Book a time!</h1>
                {showButton9 && <button onClick={() => {updateTime9("room1")}}>9:00</button>}
                {showButton10 && <button onClick={() => {updateTime10("room1")}}>10:00</button>}
                {showButton11 && <button onClick={() => {updateTime11("room1")}}>11:00</button>}
                {showButton12 && <button onClick={() => {updateTime12("room1")}}>12:00</button>}
                {showButton1 && <button onClick={() => {updateTime1("room1")}}>1:00</button>}
                {showButton2 && <button onClick={() => {updateTime2("room1")}}>2:00</button>}
                {showButton3 && <button onClick={() => {updateTime3("room1")}}>3:00</button>}
            </div>
        </div>
    );
}

export default Room1;