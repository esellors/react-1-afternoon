import React, {Component} from 'react';

export default class Sum extends Component {
    constructor() {
        super();
        this.state = {
            number1: 0,
            number2: 0,
            sum: null
        }
    }
    update1(el) {
        this.setState({number1: parseFloat(el)});

    }
    update2(el) {
        this.setState({number2: parseFloat(el)});
        
    }
    addNums(a, b) {
        let doSumThing = 0;
        doSumThing = a + b;
        this.setState({sum: doSumThing});
    }
    render() {
        return (
            // {console.log(number1)}
            // {console.log(number2)}
            <div className="puzzleBox sumPB">

                <h4>Sum</h4>
           
                <input className="inputLine" onChange={ (e) => this.update1(e.target.value)} />

                <input className="inputLine" onChange={ (e) => this.update2(e.target.value)} />

                <button className="confirmationButton" onClick={ () => this.addNums(this.state.number1, this.state.number2)} >Add Nums</button>         

                <span className="resultsBox">🤯 {this.state.sum}</span>

           </div>
        )
    }
}