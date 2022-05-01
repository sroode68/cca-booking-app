
import { Link } from "react-router-dom";
import useFetch from './useFetch';

const MyBookings = () => {

    //Fetches the data from json database and checks for any errors using the useFetch component
    const {data: rooms, error, isLoading} = useFetch("http://localhost:7000/Rooms/")
    if (isLoading) return "Loading...";
    if(error) return "Error";
    return(
        //Home link
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
                    
                    {/*If the 9:00 booking of given room is taken (false), it will display that room on the screen*/}
                    {room.Nine.toString() === "false" ?(
                        <div>
                            <h3>Today in  {room.name} at 9:00AM</h3>
                        </div>
                    ) : (
                        /*If the 10:00 booking of given room is taken (false), it will display that room on the screen*/
                        room.Ten.toString() === "false" ?(
                            <div>
                                <h3>Today in  {room.name} at 10:00AM</h3>
                            </div>
                        ) : (
                            /*If the 11:00 booking of given room is taken (false), it will display that room on the screen*/
                            room.Eleven.toString() === "false"?(
                                <div>
                                    <h3>Today in  {room.name} at 11:00AM</h3>
                                </div>
                            ) : (
                                /*If the 12:00 booking of given room is taken (false), it will display that room on the screen*/
                                room.Twelve.toString() === "false"?(
                                    <div>
                                        <h3>Today in  {room.name} at 12:00PM</h3>
                                    </div>
                                ) : (
                                    /*If the 1:00 booking of given room is taken (false), it will display that room on the screen*/
                                    room.One.toString() === "false"?(
                                        <div>
                                            <h3>Today in  {room.name} at 1:00PM</h3>
                                        </div>
                                    ) : (
                                        /*If the 2:00 booking of given room is taken (false), it will display that room on the screen*/
                                        room.Two.toString() === "false"?(
                                            <div>
                                                <h3>Today in  {room.name} at 2:00PM</h3>
                                            </div>
                                        ) : (
                                            /*If the 3:00 booking of given room is taken (false), it will display that room on the screen*/
                                            room.Three.toString() === "false"?(
                                                <div>
                                                    <h3>Today in  {room.name} at 3:00PM</h3>
                                                </div>
                                            ) : (
                                                /*If no times equal false or are taken then it will display that no rooms were booked for that room*/
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