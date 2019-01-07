import React from 'react';
import { connect } from 'react-redux';
import './photo.scss';
import PropTypes from 'prop-types';

const Photo = ({images, image}) => {
  return (
    <div>
      <img src={images[image].src} className='image'></img>
      <p className='text-overlay'>{images[image].caption}</p>
    </div>
  )
}

Photo.PropTypes = {
  images: PropTypes.array,
  image: PropTypes.number
}


const mapStateToProps = state => {
  return {
    images: state.images,
    image: state.image,
  }
}

export default connect(mapStateToProps, null)(Photo);