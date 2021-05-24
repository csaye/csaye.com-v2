import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Navbar from '../Navbar/Navbar.js';
import Home from '../Home/Home.js';
import Projects from '../Projects/Projects.js';
import Music from '../Music/Music.js';

import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route path="/projects"><Projects /></Route>
          <Route path="/music"><Music /></Route>
          <Route path="/"><Home /></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
