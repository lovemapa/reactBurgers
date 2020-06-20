import React from 'react'
import n from './Cockpit.css'


export default function Cockpit(props) {

    var assignedClasses = []
    if (props.persons.length <= 1)
        assignedClasses.push('ViewRed')
    if (props.persons.length <= 2)
        assignedClasses.push('ViewGreen')

    console.log(n);



    return (
        <div className={assignedClasses.Cockpit}>
            <p className={assignedClasses.join(' ')}>This is going to be changed</p>

            <button
                className={assignedClasses.join(' ')}
                onClick={props.changeName}
            >Toggle state
                </button>
        </div>

    )
}
