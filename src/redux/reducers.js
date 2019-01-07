import Puppies from '../../misc/puppyImages.js';

const initialState = {
  images: Puppies,
  image: 0,
}

export default (state = initialState, action) => {
  switch (action.type) {
    case 'MOVE_LEFT': {
      let newImage;
      if (state.image === 0) {
        newImage = state.images.length - 1;
      } else {
        newImage = state.image - 1;
      }
      return {
        ...state,
        image: newImage
      }
    }
    case 'MOVE_RIGHT': {
      let newImage;
      if (state.image === state.images.length - 1) {
        newImage = 0;
      } else {
        newImage = state.image + 1;
      }
      return {
        ...state,
        image: newImage
      }
    }
    default:
      return state
  }
}