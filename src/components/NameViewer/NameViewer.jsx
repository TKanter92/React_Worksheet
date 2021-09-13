import React from 'react';
import DisplayName from '../DisplayName/DisplayName';

const NameViewer = (props) => {
    return (
        <div className="row">
            <div>
                <DisplayName name={props.name}/>
            </div>
        </div>
    );
}

export default NameViewer;