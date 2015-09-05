
import React, { Component, PropTypes } from 'react';

export default class Count extends Component {

    render() {

        if (this.props.isLoading) {
            return (
                <img src="images/loading.gif" />
            )
        }

        return (<div>Count {this.props.count}</div>);
    }
}

Count.propTypes = {
    isLoading: PropTypes.bool,
    count: PropTypes.number
};