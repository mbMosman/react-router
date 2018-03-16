import React, { Component } from 'react';
import qs from 'query-string';

class Search extends Component {
    constructor (props) {
        super(props);
    }

    componentDidMount() {
        const searchObject = qs.parse( this.props.location.search );
        console.log(searchObject);
    }

    render() {
        return (
            <div>
                <h2>Search</h2>

            </div>
        );
    }
};

export default Search;