
import { Link } from "react-router-dom";
import useFetch from './useFetch';

const MyBookings = () => {

    //Fetches the data from json database 
    const {data: rooms, error, isLoading} = useFetch("http://localhost:7000/Rooms/")
    if (isLoading) return "Loading...";
    if(error) return "Error";
    return(
        //Title
        <div className="mybookings">
            <Link to="/" style={{
                  color: 'white', 
                  backgroundColor: '#1929b3',
                  borderRadius: '8px',
            }
            }>Home</Link>
            <h1>My Reservations:</h1>
            {/*Maps through each room to check if theres a false value, if there is, then that means the room is booked and it will display it on the screen*/}
            { rooms &&
            rooms.map((room) => (
                <div className = "bookings-list" key ={room.id}>
                    
                    {room.Nine.toString() === "false" ?(
                        <div>
                            <h3>Today in  {room.name} at 9:00AM</h3>
                        </div>
                    ) : (
                        room.Ten.toString() === "false" ?(
                            <div>
                                <h3>Today in  {room.name} at 10:00AM</h3>
                            </div>
                        ) : (
                            room.Eleven.toString() === "false"?(
                                <div>
                                    <h3>Today in  {room.name} at 11:00AM</h3>
                                </div>
                            ) : (
                                room.Twelve.toString() === "false"?(
                                    <div>
                                        <h3>Today in  {room.name} at 12:00PM</h3>
                                    </div>
                                ) : (
                                    room.One.toString() === "false"?(
                                        <div>
                                            <h3>Today in  {room.name} at 1:00PM</h3>
                                        </div>
                                    ) : (
                                        room.Two.toString() === "false"?(
                                            <div>
                                                <h3>Today in  {room.name} at 2:00PM</h3>
                                            </div>
                                        ) : (
                                            room.Three.toString() === "false"?(
                                                <div>
                                                    <h3>Today in  {room.name} at 3:00PM</h3>
                                                </div>
                                            ) : (
                                                <div>
                                                    <h3>No Timeslots for {room.name} Booked</h3>
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