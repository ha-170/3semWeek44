import React from 'react';
import PropTypes from 'prop-types';

const PersonList = ({ persons, deletePerson, editPerson}) => {
  return (
    <React.Fragment>
      <h2>All Persons</h2>
      <table>
        <thead>
          <tr>
            <th>Person-ID</th>
            <th>Navne</th>
          </tr>
        </thead>
        <tbody>
          {persons.map(person => (
          <tr key={person.id}>
            <td>{person.id}</td>
            <td>{person.name}</td>
            <td><button onClick={() => {deletePerson(person.id)}}>Delete</button></td>
            <td><button onClick={() => {editPerson(person.id)}}>Edit</button></td>
          </tr>
        ))}
        </tbody>
      </table>
    </React.Fragment>
  );
};
export default PersonList;

PersonList.propTypes = {
  persons: PropTypes.array,
  deletePerson: PropTypes.func,
  editPerson: PropTypes.func
}