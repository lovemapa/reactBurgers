import React from 'react'

export default function Animals(props) {
    return (
        <div>
            <h1>{props.name} has type {props.type} has now count {props.value}</h1>
        </div>
    )
}
