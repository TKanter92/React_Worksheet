import React, { Component } from 'react';
import './App.css';
import DisplayName from './DisplayName/DisplayName';
import AlertUser from './AlertUser/AlertUser';
import SuperheroTable from './SuperheroTable/SuperheroTable';
import SuperheroCreateForm from './SuperheroCreateForm/SuperheroCreateForm';



class App extends Component {
    constructor(props){
        super(props);
        this.namesList = [
            "Reggie White",
            "Mike",
            "Nevin",
            "Aaron",
            "Tory",
            "Kelly"
        ];
        this.state = { 
            heroesList: [
            {
                superheroId: 1,
                name: 'Batman',
                primaryAbility: 'Wealthy',
                secondaryAbility: 'Rich'
            },
            {
                superheroId: 2,
                name: 'Superman',
                primaryAbility: 'Super strength',
                secondaryAbility: 'Fly'
            },
            {
                superheroId: 3,
                name: 'Spiderman',
                primaryAbility: 'Spider senses',
                secondaryAbility: 'Shoots web'
            }
        ]};
    }


    displayAlertMessage = (event) => {
        alert();
    }

    addToListOfHeroes = (heroToAdd) => {
        let tempAddedHero = this.state.heroesList;
        tempAddedHero.push(heroToAdd);
        this.setState({
            heroesList: tempAddedHero
        });
    }

    render () {
        return (
            <React.Fragment>
                <DisplayName listNames={this.namesList} />
                <AlertUser />
                <SuperheroTable listOfHeroes={this.heroesList} />
                <SuperheroCreateForm addNewHero={this.addToListOfHeroes} />
            </React.Fragment>
        )
    }
}

export default App;