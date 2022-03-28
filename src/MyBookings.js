import { Link } from "react-router-dom";
import useFetch from "./useFetch";

const MyBookings = () => {
    const {data: Rooms} = useFetch('http://localhost:7000/Rooms');

    return(
        <div className="mybookings">
            <Link to="/" style={{
                  color: 'white', 
                  backgroundColor: '#1929b3',
                  borderRadius: '8px',
            }
            }>Home</Link>
            <h1>My Reservations:</h1>
            <h1>{Rooms.room1.Nine}</h1>
            {Rooms.map((room) => (
                <div>
                    {room.Nine === false ?(
                        <div>
                            <h3>Today in  {room} at 9:00AM</h3>
                        </div>
                    ) : (
                        room.Ten === false ?(
                            <div>
                                <h3>Today in  {room} at 10:00AM</h3>
                            </div>
                        ) : (
                            room.Eleven === false?(
                                <div>
                                    <h3>Today in  {room} at 11:00AM</h3>
                                </div>
                            ) : (
                                room.Twelve === false?(
                                    <div>
                                        <h3>Today in  {room} at 12:00PM</h3>
                                    </div>
                                ) : (
                                    room.One === false?(
                                        <div>
                                            <h3>Today in  {room} at 1:00PM</h3>
                                        </div>
                                    ) : (
                                        room.Two === false?(
                                            <div>
                                                <h3>Today in  {room} at 2:00PM</h3>
                                            </div>
                                        ) : (
                                            room.Three === false?(
                                                <div>
                                                    <h3>Today in  {room} at 3:00PM</h3>
                                                </div>
                                            ) : (
                                                <div>
                                                    <h3>No Rooms Booked</h3>
                                                </div>
                                                ) 
                                            )
                                        )
                                    )
                                )
                            )
                        )
                    }
                </div>
                ))}

        </div>  
    );
}

export default MyBookings;