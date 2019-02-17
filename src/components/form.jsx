import React, { Component } from 'react';

class Form extends Component {
    state = {
        name: null,
        address: null
    }

    handleCHange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    };
    handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.state)
    }
    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="name">Name:</label>
                    <input type="text" className="" id="name" onChange={this.handleCHange} />
                    <label htmlFor="name">Address:</label>
                    <input type="text" className="" id="address" onChange={this.handleCHange} />
                    <button className="btn btn-primary m-2">Submit</button>
                </form>
            </div>
        );
    }
}

export default Form;