
import React, { Component } from 'react';

export default class MyComponent extends Component {

    constructor() {
        super();
        this.state = {
            count: 0
        };

        this.onClick = this.onClick.bind(this);
    }

    onClick() {
        this.setState({
            count: this.state.count + 1
        });
    }

    render() {

        return (
            <button onClick={this.onClick}>Button was clicked {this.state.count} times</button>
        );
    }
}