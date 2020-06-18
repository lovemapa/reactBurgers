import React, { useState } from 'react';

import Animals from './Animals/Animals'
import './App.css';

function App() {

  const [animalState, setAnimals] = useState({
    animals: [{
      name: "Cat", type: "Mammal"
    },
    {
      name: "Dog", type: "Mammal"
    }],
    count: 0
  })

  const setState = () => {
    setAnimals({
      animals: [{
        name: "Whale", type: "Mammal"
      },
      {
        name: "Human", type: "Mammal"
      }],
      count: animalState.count + 1

    })
  }
  return (
    <div>
      <button onClick={setState}>Set state</button>
      <Animals name={animalState.animals[0].name} type={animalState.animals[0].type} value={animalState.count} />
      <Animals name={animalState.animals[1].name} type={animalState.animals[1].type} />

    </div>


  );
}

export default App;
