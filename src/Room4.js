import { Link } from "react-router-dom";

const Room4 = () => {
    return(
        <div className="room-info">
            <Link to="/" >Home</Link>
            <h1>Room 4</h1>
            <h2>The room behind room 3</h2>
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
        </div>
    );
}

export default Room4;