import React from 'react';
import { connect } from 'react-redux';
import './photo.css';

const Photo = ({images, image}) => {
  return (
    <div>
      <img src={images[image].src}></img>
      <p className='text-overlay'>{images[image].caption}</p>
    </div>
  )
}


const mapStateToProps = state => {
  return {
    images: state.images,
    image: state.image
  }
}

export default connect(mapStateToProps, null)(Photo);