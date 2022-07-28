import * as types from '../people/types';

// this is an example action
export const doNothing = (payload) => ({
  type: types.DO_NOTHING,
  payload: payload,
});

export const setQuery = (query) => ({
  type: types.SET_QUERY,
  payload: query,
});

// ...
