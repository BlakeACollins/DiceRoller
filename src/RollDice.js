import React, {Component} from 'react';
import Die from './Die';
import './RollDice.css';

class RollDice extends Component{
    static defaultProps = {
        sides: ["one", "two", "three", "four", "five", "six"]
    };
    constructor(props){
        super(props);
        this.state = {die1: 'one', die2: 'one', rolling: false }
        this.roll = this.roll.bind(this);
    }
    roll(){
    const newDie1 = this.props.sides[Math.floor(Math.random() * this.props.sides.length)];

    const newDie2 = this.props.sides[Math.floor(Math.random() * this.props.sides.length)];

    this.setState({die1: newDie1, die2: newDie2, rolling: true});

    setTimeout(()=>{
        this.setState({rolling: false});
    }, 1000)
    }
    
    render(){
        return(
            <div className="RollDice">
                <div className="DiceContainer">
                <Die face={this.state.die1} />
                <Die face={this.state.die2} />
                </div>
                <button onClick={this.roll} disabled={this.state.rolling}>
                    {this.state.rolling ? 'Rolling...' : 'Roll Dice!'}
                </button>
            </div>
        )
    }
}

export default RollDice;