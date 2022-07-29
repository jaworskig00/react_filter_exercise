// this is an example selector
const getNothing = (state) => {
  return null;
};

export const getFilteredPeople = (state) => {
  return state.people.filter((person) => (person.name.includes(state.query))).map((person) => (
    <div key={person.id} className="App-box">
      {person.name}
    </div>
  ))
}

// ...
