import React from 'react';

const SuperheroTable = (props) => {
    return (
        <React.Fragment>
            <table>
                <thead>
                    <th><h1>Superheros</h1></th>
                </thead>
                <tbody>
                        {this.heroesList.map((hero) => {
                            return (
                                <tr key={hero.superheroId}>
                                    <td>{hero.name}</td>
                                    <td>{hero.primaryAbility}</td>
                                    <td>{hero.secondaryAbility}</td>
                                </tr> 
                            )
                        })}
                </tbody>
            </table>
        </React.Fragment>
    );
}

export default SuperheroTable;