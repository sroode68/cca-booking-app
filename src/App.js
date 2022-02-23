import './index.css';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Home from './Home';
import Room1 from './Room1';

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
        </Switch>
      </div>
    </Router>
  );
}

export default App;
