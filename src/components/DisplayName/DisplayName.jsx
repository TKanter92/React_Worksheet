import React from 'react';
import './DisplayName.css';

const DisplayName = (props) => {
    return (
        <React.Fragment>
            <ul>
            {props.listNames.map((name) => {
                return <li>{name}</li>
            })}
            </ul>
        </React.Fragment>
    );
}

export default DisplayName;