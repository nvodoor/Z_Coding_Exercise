import React from 'react';
import ReactDOM from 'react-dom';
import './app.scss';
import Maltese from './Maltese_puppy.jpeg';
import Hazard from './Biohazard_symbol.svg';
import Thousand from './River.svg'; 

const App = () => {
  return (
    <div>
      <h1>Example React App</h1>
      <img src={Maltese}></img>
      <img src={Hazard}></img>
      <img src={Thousand}></img>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('app'));