import {ERROR, rateActions, SEND_LIKE} from '../actions/rateActions';

export interface RateState {
  liked: number[];
}

const initialState: RateState = {
  liked: [],
};

export function ratedReducer(state = initialState, action: rateActions) {
  switch (action.type) {
    case SEND_LIKE:
      console.log(state);
      return {
        ...state,
        liked: [...state.liked, action.cardIndex],
      };

    case ERROR:
      console.log('errorss');
    default:
      return state;
  }
}
