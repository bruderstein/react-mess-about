
import React, { Component } from 'react';

export default class MyComponent extends Component {

    constructor() {
        super();
        this.state = {
            clicked: []
        };

        this.onClick = this.onClick.bind(this);
    }

    onClick() {

        let clicked = this.state.clicked;
        clicked.push(new Date());

        this.setState({
            clicked: clicked
        });
    }

    render() {

        var clicks = this.state.clicked.map(click => (<li>. Clicked at {click.toISOString()}</li>));

        return (
            <div>
                <button onClick={this.onClick}>Button was clicked {this.state.clicked.length} times</button>
                <ul>
                    {clicks}
                </ul>
            </div>
        );
    }
}