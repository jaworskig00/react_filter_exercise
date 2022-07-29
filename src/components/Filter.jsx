import React from 'react';
import { useDispatch } from 'react-redux';
import { setQuery } from '../redux/people/reducer'
// ...

function Filter() {
  const dispatch = useDispatch()

  const onInputChange = (event) => {
    dispatch(setQuery(event.target.value))
  };

  return (
    <div className="App-box">
      <input type="text" placeholder="query" onChange={onInputChange} />
    </div>
  );
}

Filter.propTypes = {
  // ...
};

export default Filter;
