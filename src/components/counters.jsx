import React, { Component } from 'react';
import Counter from "./counter";
class Counters extends Component {

    render() {
        const { onReset, counters, onDelete, onIncrement } = this.props;
        console.log("Counters");
        return (<div>
            <button
                onClick={this.props.onReset}
                className="btn btn-primary btn-sm m-2">Reset</button>
            {this.props.counters.map(counter =>
                <Counter
                    onDelete={onDelete}
                    onIncrement={onIncrement}
                    key={counter.id}
                    counter={counter}
                />

            )}
        </div>);
    }
}

export default Counters;