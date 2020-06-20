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


  changeName = () => {
    this.setState({
      persons: [
        { id: 'dfdssdf', name: "Dog", type: "mamal" },
        { id: 'kljklj', name: "Lizard", type: "reptile" },
        { id: 'opooo', name: "Chimpanze", type: "Alike Sapiens" }
      ],
      showAnimals: !this.state.showAnimals
    })
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

    let person = null
    const style = {
      backgroundColor: 'red',

      margin: '0 auto',
      textAlign: 'center',
      border: 'none',
      color: 'white',
      padding: '15px 32px',

      textDecoration: 'none',
      display: `block`,

    };

    if (this.state.showAnimals) {
      person = (<div>
        {
          this.state.persons.map((persons, index) => {
            return <Animals
              click={() => this.deletePerson(index)}
              name={persons.name}
              value={persons.type}
              key={persons.id}
              stateChange={(event) => this.changeState(event, persons.id)}
            />
          })

        }

      </div>)
      style.backgroundColor = 'black'
      style.fontWeight = 'bold';

    }

    return (
      <div>

        {person}

        <br></br>

        <button onClick={this.changeName} style={style}>Toggle state</button>
      </div >)
  }
}

export default App;
