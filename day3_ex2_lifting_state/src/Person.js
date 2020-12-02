import React, {useState} from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { v1 as uuid } from 'uuid';
import NewPerson from "./NewPerson";
import PersonList from "./PersonList";

function Person() {
    const initialData = [
        { id: uuid(), name: "Hassanain" },
        { id: uuid(), name: "Rasmus" },
        { id: uuid(), name: "Christian" }
    ]
    const [persons, setPersons] = useState(initialData);
    const [newPerson, setNewPerson] = useState({ id: "", name: "" });
    // console.log(persons)
  
    const addPerson = person => {
        if (person.id === "") { // id=-1 Indicates a new object
            person.id = uuid();
            persons.push(person);
        } else {//if id != "", it's an existing todo. Find it and add changes
            let personToEdit = persons.find(p => p.id === person.id);
            personToEdit.name = person.name;
        }
        setPersons([...persons]);
        setNewPerson({id:"", name:""})
    };

    const deletePerson = id => {
        persons.pop(persons.find(person => person.id === id));
        setPersons([...persons]);
    }
    const editPerson = id => {
        setNewPerson(persons.find(person => person.id === id));
    }

    return (
        <div className="container outer">
            <h2>Props and Lifting State Demo</h2>
            <div className="row">
            <div className="col-7 allPersons">
                <PersonList 
                persons={persons} 
                deletePerson={deletePerson} 
                editPerson={editPerson}
                />
            </div>
            <div className="col-4 new-person">
                <NewPerson 
                addPerson={addPerson}
                nextPerson={newPerson}            
                />
            </div>
            </div>
        </div>
    );
}
  export default Person;
