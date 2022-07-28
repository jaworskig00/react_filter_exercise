import React, { useMemo } from "react";
import { useSelector } from "react-redux";
import { connect } from "react-redux";
import { getFilteredPeople } from "../redux/people/selectors";
// ...

function People({ people, query }) {
  const renderPeople = useMemo(() => getFilteredPeople({ people, query }));

  return <div>{renderPeople}</div>;
}

People.propTypes = {
  // ...
};

const mapStateToProps = (state) => ({
  people: state.people.list,
  query: state.people.query,
});

export default connect(mapStateToProps)(People);
