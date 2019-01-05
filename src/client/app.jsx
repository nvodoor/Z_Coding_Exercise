import React from 'react';
import ReactDOM from 'react-dom';
import './app.scss';
import Maltese from './Maltese_puppy.jpeg';

const App = () => {
  <div>
    <h1>Example React App</h1>
    <img src={Maltese}></img>
  </div>
}

ReactDOM.render(<App />, document.getElementById('app'));