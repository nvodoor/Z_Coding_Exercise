import React from 'react';
import ReactDOM from 'react-dom';
import './app.scss';
import { Provider } from 'react-redux';
import store from '../redux/store.js';
import PhotoGallery from './PhotoGallery.jsx';

const App = () => {
  return (
    <div className='app-container'>
      <h1>PhotoGallery</h1>
      <PhotoGallery />
    </div>
  )
}

ReactDOM.render(
<Provider store={store}>
    <App />
</Provider>, 
document.getElementById('app'));