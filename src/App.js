import './index.css';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Home from './Home';
import Room1 from './Room1';
import Room2 from './Room2';
import Room3 from './Room3';
import Room4 from './Room4';

function App() {

  return (
    <Router>
      <div className='App'>
        <Switch>
          <Route exact path ="/">
            <Home />
          </Route>
          <Route path ="/room1">
            <Room1/>
          </Route>
          <Route path ="/room2">
            <Room2/>
          </Route>
          <Route path ="/room3">
            <Room3/>
          </Route> 
          <Route path ="/room4">
            <Room4/>
          </Route>           
        </Switch>
      </div>
    </Router>
  );
}

export default App;
