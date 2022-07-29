// this is an example selector
const getNothing = (state) => {
  return null;
};

export const getFilteredPeople = ({ people, query }) => {
  return people
    .filter((person) => person.name.includes(query))
    .map((person) => (
      <div key={person.id} className="App-box">
        {person.name}
      </div>
    ));
};

export const selectPeople = (state) => state.people.list;

export const selectQuery = (state) => state.people.query;
