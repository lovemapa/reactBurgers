import React from 'react'
import './Animals.css'


export default function Animals(props) {


    return (
        <div className="Animals">
            <h1 onClick={props.click}>  {props.name} has type {props.value} has now count {props.count} </h1>

        </div>
    )
}

