import React, { Component } from 'react';

import Animals from './Animals/Animals'
import './App.css';

class App extends Component {



  state = {
    persons: [
      { name: "Cat", type: "mamal" },
      { name: "Snake", type: "reptile" },
      { name: "Human", type: "Sapiens" }
    ],
    showAnimals: true,
    count: 0
  }

  changeState = () => {
    const s = this.state.showAnimals
    this.setState({

      pesons: [
        { name: "Dog", type: "mamal" },
        { name: "Lizar", type: "reptile" }
      ],
      count: this.state.count + 1,
      showAnimals: !s
    })
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
          value={persons.type} />
      })}




    </div >)
  }
}

export default App;
