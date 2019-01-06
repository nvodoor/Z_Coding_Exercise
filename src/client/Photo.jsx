import React from 'react';
import { connect } from 'react-redux';

const Photo = ({images, image}) => {
  return (
    <div>
      <img src={images[image].src}></img>
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