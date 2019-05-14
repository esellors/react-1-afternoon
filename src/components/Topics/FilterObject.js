import React, {Component} from 'react';

export default class FilterObject extends Component {
    constructor() {
        super();
        this.state = {
            unfilteredArray: [
                {
                    name: 'Max',
                    age: 22,
                    sport: 'Hockey'
                },
                {
                    animal: 'Garfield',
                    age: 2,
                    color: 'Orange'
                },
                {
                    name: 'Cathy',
                    grade: 6,
                    color: 'Pink'
                }
            ],
            userInput: '',
            filteredArray: []
        }
    }
    updateInput(el) {
        this.setState({userInput: el});
    }
    filterStuff(el) {
        let newArr = [];

        for (let i = 0; i < this.state.unfilteredArray.length; i++) {
            if (this.state.unfilteredArray[i].hasOwnProperty(el)) {
                newArr.push(this.state.unfilteredArray[i]);
            }
        }
        this.setState({filteredArray: newArr});
    }
    render() {
        return (
            <div className="puzzleBox filterObjectPB">
            
                <h4>Filter Object</h4>

                <span className="puzzleText">{JSON.stringify(this.state.unfilteredArray, null, 10)}</span>
            
                <input className="inputLine" onChange={(e) => this.updateInput(e.target.value)} />

                <button className="confirmationButton" onClick={() => this.filterStuff(this.state.userInput)}>Filter</button>
            
                <span className="resultsBox filterObjectRB">Filtered: {JSON.stringify(this.state.filteredArray)}</span>
            
            </div>
        )
    }
}