import React from 'react'
import './Animals.css'


export default function Animals(props) {


    return (
        <div className="Animals">
            <h1>{props.name} has type {props.type} has now count {props.value}</h1>
            <input type='text' onChange={props.changeEvent} />
        </div>
    )
}
