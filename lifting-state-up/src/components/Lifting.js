import React, {Component} from 'react';

class Lifting extends Component {
    render() {
        const {number, increment, decrement} = this.props;
        return (
            <div className="Lifting">
                <div>Count : {number}</div>
                <button onClick={increment}>Increment</button>
                <button onClick={decrement}>Decrement</button>
            </div>    
        );
    }
}

export default Lifting;