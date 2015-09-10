
import React, { Component } from 'react';
import SuperAgent from 'superagent';
import Count from './Count';

export default class MyComponent extends Component {

    constructor() {
        super();
        this.state = {
            clicked: [],
            isLoading: true,
            count: 0
        };

        this.onClick = this.onClick.bind(this);
    }

    componentWillMount() {
        SuperAgent.get('/api/slow').then((result) =>
            this.setState({
                count: result.body.count,
                isLoading: false
            })
        )
    }

    onClick() {

        let clicked = this.state.clicked;
        clicked.push(new Date());

        this.setState({
            clicked: clicked
        });
    }

    onRemove(index) {

        let clicked = this.state.clicked;
        clicked.splice(index, 1);

        this.setState({
            clicked: clicked
        });
    }

    render() {

        var clicks = this.state.clicked.map((click, index) =>
            (<li>. Clicked at {click.toISOString()} <button onClick={this.onRemove.bind(this, index)}>Remove</button></li>));

        return (
            <div>
                <Count isLoading={this.state.isLoading} count={this.state.count} />
                <button onClick={this.onClick}>Button was clicked {this.state.clicked.length} times</button>
                <ul>
                    {clicks}
                </ul>
            </div>
        );
    }
}