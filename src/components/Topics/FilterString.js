import React, {Component} from 'react';

export default class FilterString extends Component {
	constructor() {
		super();
		this.state = {
			unFilteredArray: ['apple', 'banana', 'cherry', 'one', 'two', 'three', 'happy', 'laugh', 'salty'],
			userInput: '',
			filteredArray: []
		}
	}
	updateInput(el) {
		this.setState({userInput: el});
	}
	filterBoo(el) {
		let newArr = [];

		for (let i = 0; i < this.state.unFilteredArray.length; i++) {
			if (this.state.unFilteredArray[i].includes(el)) {
				newArr.push(this.state.unFilteredArray[i]);
			}
		}
		this.setState({filteredArray: newArr});
	}
	render() {
		return (
			<div className="puzzleBox filterStringPB">

				<h4>Filter String</h4>

				<span className="puzzleText">{JSON.stringify(this.state.unFilteredArray, null, 5)}</span>
				
				<input className="inputLine" onChange={(e) => this.updateInput(e.target.value)} />

				<button className="confirmationButton" onClick={() => this.filterBoo(this.state.userInput)}>Filter</button>

				<span className="resultsBox filterStringRB">Found: {JSON.stringify(this.state.filteredArray, null, 10)}</span>

			</div>
		)
	}
}