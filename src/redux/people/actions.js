import * as types from '../people/types';

// this is an example action
export const doNothing = (payload) => ({
  payload: payload,
});

const setQuery = (state, action) => {
  return {
    ...state,
    query: action.payload
  }
}

export default {setQuery}

// ...
