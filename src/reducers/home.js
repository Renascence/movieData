import { HOME_DATA } from '../actions/home';

const initialState = [];

export default (state = initialState, action) => {
  switch (action.type) {
    case HOME_DATA:
      return action.payload;
    default:
      return state;
  }
};
