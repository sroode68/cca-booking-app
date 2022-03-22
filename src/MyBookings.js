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
            {Rooms.map((rooms) => (
                <div>
                    {rooms.Nine === false ?(
                        <div>
                            <h3>Today in  {rooms} at 9:00AM</h3>
                        </div>
                    ) : (
                        rooms.Ten === false ?(
                            <div>
                                <h3>Today in  {rooms} at 10:00AM</h3>
                            </div>
                        ) : (
                            rooms.Eleven === false?(
                                <div>
                                    <h3>Today in  {rooms} at 11:00AM</h3>
                                </div>
                            ) : (
                                rooms.Twelve === false?(
                                    <div>
                                        <h3>Today in  {rooms} at 12:00PM</h3>
                                    </div>
                                ) : (
                                    rooms.One === false?(
                                        <div>
                                            <h3>Today in  {rooms} at 1:00PM</h3>
                                        </div>
                                    ) : (
                                        rooms.Two === false?(
                                            <div>
                                                <h3>Today in  {rooms} at 2:00PM</h3>
                                            </div>
                                        ) : (
                                            rooms.Three === false?(
                                                <div>
                                                    <h3>Today in  {rooms} at 3:00PM</h3>
                                                </div>
                                            ) : (
                                                console.log('Finished')
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