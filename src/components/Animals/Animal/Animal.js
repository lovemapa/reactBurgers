import React from 'react'
import './Animal.css'


export default function Animal(props) {


    return (
        <div className="Animal">
            <h1 onClick={props.click}>  {props.name} has type {props.value} has now count {props.count} </h1>
            <input onChange={props.stateChange} value={props.name} />
        </div>
    )
}

