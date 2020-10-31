import logo from './logo.svg';
import './App.css';
import Welcome from '../src/components/Welcome'
import Start from '../src/components/Start'
import Trivia from '../src/components/Trivia'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// Supports Multi-page app

function App() {
  return (
    <Router>
      <Switch>
        <Route path = "/" exact component = {Start}/>
        <Route path = "/trivia" exact component = {Trivia}/>
      </Switch>
    </Router>
  );
}

export default App;
