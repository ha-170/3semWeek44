import {persons} from './file2'

function Welcome(props) {
    return <h1>Hello, {props.name}</h1>;
}

function WelcomePerson(props){
    const {firstName, lastName, email} = props.person;
    return (
    <p>{firstName}, {lastName}, {email}</p>
    );
}
  
function MultiWelcome() {
return (
    <div>
        <Welcome name="Sara" />
        <Welcome name="Cahal" />
        <Welcome name="Edith" />

        <WelcomePerson person={persons[0]}/>
        <WelcomePerson person={persons[1]}/>
        <WelcomePerson person={persons[2]}/>
        
        {persons.map((element)=><WelcomePerson person={element}/>)}
    </div>
    );
}

export default MultiWelcome;