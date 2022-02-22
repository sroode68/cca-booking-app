import Announcements from './AnnouncementScreen';
import './index.css';
import useFetch from './useFetch'

//npx json-server --watch data/db.json --port 7000
function App() {
  const {data: announcements} = useFetch('http://localhost:7000/announcements');
  return (
    <div className="App">
      {announcements && <Announcements announcements={announcements}/>}
    </div>
  );
}

export default App;
