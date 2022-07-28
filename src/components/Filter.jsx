import React from "react";
import { connect } from "react-redux";
import { setQuery } from "../redux/people/actions";
// ...

function Filter({ people, dispatch }) {
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

const mapStateToProps = (state) => ({
  people: state.people,
});

export default connect(mapStateToProps)(Filter);
