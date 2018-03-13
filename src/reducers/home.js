import { FETCH_HOME_DATA_SUCCESS } from '../actions/constants';

const initialState = [];

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_HOME_DATA_SUCCESS:
      return action.payload;
    default:
      return state;
  }
};
