import React, {Component} from 'react';

export default class EvenAndOdd extends Component {
    constructor() {
        super();
        this.state = {
            evenArray: [],
            oddArray: [],
            userInput: ''
        }
    }
    updateInput (val) {
        this.setState({userInput: val});
    }
    filterNums(nums) {
        let newArr = nums.split(',');
        let evenList = [];
        let oddList = [];

        newArr.forEach( (el) => {
            if ( el % 2 === 0) {
                evenList.push(el);
            } else {
                oddList.push(el);
            }
        })
        
        this.setState({evenArray: evenList, oddArray: oddList})

    }
    render () {
        return (
            <div className="puzzleBox evenAndOddPB">
                <h4>Evens and Odds</h4>
                <input className="inputLine" onChange={ (e) => this.updateInput(e.target.value) } />
                <button className="confirmationButton" onClick={ () => this.filterNums(this.state.userInput) } > Sort </button>
                <span className="resultsBox">Even Nums: { this.state.evenArray.join(" 🦴 ") }</span>
                <span className="resultsBox">Odd Nums: { this.state.oddArray.join(" 🦴 ") }</span>
            </div>
        )
    }
}