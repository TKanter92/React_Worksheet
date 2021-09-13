import React, { Component } from 'react';

class AlertUser extends Component {
    constructor(props){
        super(props);
        this.state={ }
    }
    
    handleSubmit = (event) => {
        event.preventDefault();
        alert("DevCodeCamp");
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <button type="submit">Click Me!</button>
            </form>
        )
    }
}

export default AlertUser;

