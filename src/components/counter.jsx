import React, { Component } from 'react';
import { runInThisContext } from 'vm';

class Counter extends Component {
    componentDidUpdate(prevProps, prevState) {

        if (prevProps.counter.value !== this.props.counter.value) {
            //Ajax call and fetch new
            console.log("Update");
        }
    }

    componentWillUnmount() {
        console.log("Unmount");
    }
    state = {
        tags: ["a", "b", "c"]
    };

    renderTags() {
        if (this.state.tags.length === 0) return <p>There are no tags</p>;
        return <ul>{this.state.tags.map(tag => <li key={tag}>{tag}</li>)}</ul>;
    };

    render() {
        console.log("Counter");
        return (
            <div>

                <span className={this.getbadgeClasses()}> {this.formatCount()} </span>
                <button
                    onClick={() => this.props.onIncrement(this.props.counter)}
                    className="btn btn-secondary btn-sm">
                    Increment
                </button>
                <button
                    onClick={() => this.props.onDelete(this.props.counter.id)}
                    className="btn btn-danger btn-sm m-2">Delete</button>
                {this.state.tags.length === 0 && 'Please Create a new tag'}
                {this.renderTags()}
            </div >
        );
    }
    getbadgeClasses() {
        let classes = "badge m-2 badge-";
        classes += this.props.counter.value === 0 ? "warning" : "primary";
        return classes;
    }

    formatCount() {
        const { value } = this.props.counter;
        return value === 0 ? "Zero" : value;
    }
}
export default Counter;