import React, { useMemo } from "react";
import { useSelector } from "react-redux";
import { getFilteredPeople, selectPeople, selectQuery } from "../redux/people/selectors";
// ...

function People() {
  const people = useSelector(selectPeople)
  const query = useSelector(selectQuery)
  const renderPeople = useMemo(() => getFilteredPeople({ people, query }));

  return <div>{renderPeople}</div>;
}

People.propTypes = {
  // ...
};

export default People;
