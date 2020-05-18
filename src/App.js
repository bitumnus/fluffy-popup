import React from 'react';
import Main from './components/Main/Main'
import { BrowserRouter, Route } from 'react-router-dom';

import './App.css';

const Error = () => <h1>Something Go Wrong!</h1>

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Route path="/" exact component={Main} />
        <Route path="/error" component={Error} />
      </BrowserRouter>
    </div>
  );
}

export default App;
