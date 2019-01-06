import React from 'react';
import { moveRight, moveLeft } from '../redux/actions.js';
import { connect } from 'react-redux';
import Photo from './Photo.jsx';
import './photo-container.scss'

const PhotoGallery = ({moveLeft, moveRight}) => {
  return (
    <div className='photo-container'>
      <i className="fas fa-arrow-circle-left fa-7x" onClick={moveLeft}></i>
      <Photo />
      <i className="fas fa-arrow-circle-right fa-7x" onClick={moveRight}></i>
    </div>
  )
}

const mapDispatchToProps = dispatch => {
  return {
    moveLeft: () => {
      dispatch(moveLeft())
    },
    moveRight: () => {
      dispatch(moveRight())
    }
  }
}

export default connect(null, mapDispatchToProps)(PhotoGallery);