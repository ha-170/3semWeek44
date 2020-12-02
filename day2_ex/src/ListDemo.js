import React, {useState} from "react";

function MemberTable({ members }) {
    const head = <tr><th>Name:</th><th>Age:</th></tr>
    const body = members.map((member, index) => <tr key={index}><td>{member.name}</td><td>{member.age}</td></tr>);
    return (
        // tilføjet lidt i css også (table.center)
        <table class="center">
            <thead>{head}</thead>
            <tbody>{body}</tbody>
        </table>
    );
}

function MemberDemo(props) {
  return (
    <div>
      <h4>All Members</h4>
      <MemberTable members={props.members}/>
    </div>
  );
}

export default function App() {
  const initialMembers = [{name : "Peter", age: 18},
                          {name : "Hanne", age: 35},
                          {name : "Janne", age: 25},
                          {name : "Holger", age: 22}];
  const [members,setMembers] = useState(initialMembers)

  return (<MemberDemo members={members} />);
}