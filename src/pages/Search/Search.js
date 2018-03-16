import React, { Component } from 'react';

class Search extends Component {
    constructor (props) {
        super(props);
    }

    render() {
        return (
            <div>
                <h2>Search</h2>
                <pre>{JSON.stringify(this.props)}</pre>
            </div>
        );
    }
};

export default Search;