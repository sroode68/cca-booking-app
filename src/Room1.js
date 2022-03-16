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

    const updateTime9 = (room) => {
        //axios.put(url,(setShowButton9(false)))
    }

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

    useEffect(() => {
        getTimes("room1")             
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
                {showButton9 && <button onClick={updateTime9("room1")}>9:00</button>}
                {showButton10 && <button>10:00</button>}
                {showButton11 && <button>11:00</button>}
                {showButton12 && <button>12:00</button>}
                {showButton1 && <button>1:00</button>}
                {showButton2 && <button>2:00</button>}
                {showButton3 && <button>3:00</button>}
            </div>
        </div>
    );
}

export default Room1;