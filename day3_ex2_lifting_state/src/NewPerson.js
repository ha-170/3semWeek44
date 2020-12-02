import React, { useState, useEffect } from "react";
import PropTypes from 'prop-types';

function NewPerson(props) {

  const [person, SetPerson] = useState(props.nextPerson);

  const savePerson = evt => {
    if (person.nextPerson === "") {
      return;
    }
    props.addPerson(person);
    evt.preventDefault();
  };

  useEffect(() => SetPerson({ ...props.nextPerson }), [props.nextPerson]);

  const onChange = evt => {
    const val = evt.target.value;
    person.name = val;
    SetPerson({...person});
  };
  
  const title = person.id === "" ? "Create new Person" : "Edit Person"
  return (
    <div>
      <h4>{title}</h4>
      <form>
        <input value={person.name} onChange={onChange} />
        <br/><br/>
        <button onClick={savePerson} className="btn btn-info">Save</button>
      </form>
      {person.id !== "" && <p>Editing person with</p>}
    </div>
  );
}
export default NewPerson;

NewPerson.propTypes = {
  nextPerson: PropTypes.object,
  addPerson: PropTypes.func
}