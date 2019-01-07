import React from 'react';
import { moveRight, moveLeft } from '../redux/actions.js';
import { connect } from 'react-redux';
import Photo from './Photo.jsx';
import './photo-container.scss'
import PropTypes from 'prop-types';


const PhotoGallery = ({images, image, css_class, moveLeft, moveRight}) => {
  return (
    <div className='photo-container'>
      <i className="fas fa-arrow-circle-left fa-7x center-arrow" onClick={moveLeft}></i>
      {images.map((imag, i) => {
        if (i === image) {
          return <Photo source={imag.src} 
                        css_class={css_class} 
                        key={i}  
                        caption={imag.caption} 
                        text_show={'text-overlay text-visible'}/>
        } else {
          return <Photo source={imag.src} 
                    css_class={'image-render'} 
                    key={i} 
                    caption={imag.caption} 
                    text_show={'text-overlay text-invisible'}/>
        }
      })}
      <i className="fas fa-arrow-circle-right fa-7x center-arrow" onClick={moveRight}></i>
    </div>
  )
}

PhotoGallery.PropTypes = {
  moveLeft: PropTypes.func.isRequired,
  moveRight: PropTypes.func.isRequired,
  images: PropTypes.array.isRequired,
  image: PropTypes.number.isRequired,
  css_class: PropTypes.string.isRequired
}

const mapStateToProps = state => {
  return {
    images: state.images,
    image: state.image,
    css_class: state.class
  }
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

export default connect(mapStateToProps, mapDispatchToProps)(PhotoGallery);