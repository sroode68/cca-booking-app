import Announcements from './AnnouncementScreen';
import './index.css';
import RoomListing from './RoomListing';
import useFetch from './useFetch'

//npx json-server --watch data/db.json --port 7000
const Home = () => {
  const {data: announcements} = useFetch('http://localhost:7000/announcements');
  return (
    <div className="App">
      {announcements && <Announcements announcements={announcements}/>}
      <RoomListing/>
    </div>
  );
}

export default Home;