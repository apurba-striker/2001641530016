import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import AllTrains from './components/AllTrains';
import SingleTrain from './components/SingleTrain';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/" exact component={AllTrains} />
          <Route path="/train/:trainNumber" component={SingleTrain} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;