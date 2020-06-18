import React, { Component } from 'react';

import Animals from './Animals/Animals'
import './App.css';

class App extends Component {



  state = {
    persons: [
      { id: 'dfdssdf', name: "Cat", type: "mamal" },
      { id: 'kljklj', name: "Snake", type: "reptile" },
      { id: 'opooo', name: "Human", type: "Sapiens" }
    ],
    showAnimals: true,
    count: 0
  }

  changeState = (event, id) => {

    const personIndex = this.state.persons.findIndex(person => {
      return person.id === id
    })

    const person = { ...this.state.persons[personIndex] };


    person.name = event.target.value
    const persons = [...this.state.persons]
    persons[personIndex] = person
    this.setState({ persons: persons })

  }

  deletePerson = (personIndex) => {

    let persons = [...this.state.persons]
    persons.splice(personIndex, 1)
    this.setState({ persons: persons })
  }




  render() {

    return (<div>
      {this.state.persons.map((persons, index) => {
        return <Animals
          click={() => this.deletePerson(index)}
          name={persons.name}
          value={persons.type}
          key={persons.id}
          stateChange={(event) => this.changeState(event, persons.id)} />

      })}




    </div >)
  }
}

export default App;
