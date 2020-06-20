import React from 'react'
import Animal from './Animal/Animal'

export default function Animals(props) {
    return (
        props.persons.map((persons, index) => {
            return <Animal
                click={() => props.delete(index)}
                name={persons.name}
                value={persons.type}
                key={persons.id}
                count={props.count}
                stateChange={(event) => props.change(event, persons.id)}
            />
        })
    )
}
