import React from 'react';
import { connect } from 'react-redux';
import './photo.scss';
import PropTypes from 'prop-types';

const Photo = ({source, caption, css_class, text_show}) => {
  return (
    <div>
      <img src={source} className={css_class}></img>
      <p className={text_show}>{caption}</p>
    </div>
  )
}

Photo.PropTypes = {
  source: PropTypes.string.isRequired,
  caption: PropTypes.string.isRequired,
  css_class: PropTypes.string.isRequired,
  text_show: PropTypes.string.isRequired
}

export default Photo;