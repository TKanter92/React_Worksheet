import React, { Component } from 'react';


class SuperheroCreateForm extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            heroesName: ''
         }
    }

    handleChange = (event) => {
        this.setState({
            heroesName: event.target.value
        });
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.addNewHero(this.state.heroesName);
    }
    
    render() { 
        return ( 
            <form onSubmit={this.handleSubmit}>
                <label>Create New Hero</label>
                <input onChange={this.handleChange} value={this.state.heroesName}/>
                <button type="submit">Add Hero</button>
            </form>
         );
    }
}
 
export default SuperheroCreateForm;