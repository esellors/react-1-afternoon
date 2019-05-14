import React, {Component} from 'react';

export default class Palindrome extends Component {
   constructor() {
      super();
      this.state = {
         userInput: '',
         palindrome: ''
      }
	}
	updateInput(el) {
		this.setState({userInput: el});
	}
	doesItPal(el) {
		let elForward = el.split("");
		let elReverse = elForward.slice();
		elReverse.reverse();

		for (let i = 0; i < el.length; i++) {
			if (elForward[i] !== elReverse[i]) {
				this.setState({palindrome: '👎'});
				break;
			} else {
				this.setState({palindrome: '👍'});
			}
		}
	}
   render() {
      return (
         <div className="puzzleBox filterStringPB">

            <h4>Palindrome</h4>

            <input className="inputLine" onChange={ (e) => this.updateInput(e.target.value) } />

            <button className="confirmationButton" onClick={ () => this.doesItPal(this.state.userInput) }>Submit It</button>

            <span className="resultsBox">Is palindrome: {this.state.palindrome}</span>

         </div>
      )
   }
}	