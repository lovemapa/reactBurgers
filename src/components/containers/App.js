import React, { Component } from 'react';
import Radium from 'radium'
import Animals from '../Animals/Animals'
import './App.css';
import Cockpit from '../Cockpit/Cockpit';
import Tick from '../Tick'



class App extends Component {



  state = {
    persons: [
      { id: 'dfdssdf', name: "Cat", type: "mamal" },
      { id: 'kljklj', name: "Snake", type: "reptile" },
      { id: 'opooo', name: "Human", type: "Sapiens" }
    ],
    showAnimals: true,
    showTimer: true,
    count: 0
  }


  changeName = () => {
    this.setState((prevState, count) => {
      return {
        persons: [
          { id: 'dfdssdf', name: "Dog", type: "mamal" },
          { id: 'kljklj', name: "Lizard", type: "reptile" },
          { id: 'opooo', name: "Chimpanze", type: "Alike Sapiens" }
        ],
        showAnimals: !this.state.showAnimals,
        count: prevState.count + 1
      }

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


  toggleTimer = () => {

    this.setState({ showTimer: !this.state.showTimer })
  }

  render() {

    let person = null
    let timer = null

    if (this.state.showAnimals) {
      person = (<div>
        <Animals
          persons={this.state.persons}
          delete={this.deletePerson}
          change={this.changeState}
          count={this.state.count}
        />
      </div>)


    }
    if (this.state.showTimer) {

      timer = (<div>
        <Tick />
      </div>)
    }


    return (
      <div>

        {person}

        <br></br>

        <Cockpit persons={this.state.persons}
          changeName={this.changeName} />

        {timer}
        <button onClick={this.toggleTimer}>Toggle Timer</button>
      </div >)
  }
}

export default Radium(App);
