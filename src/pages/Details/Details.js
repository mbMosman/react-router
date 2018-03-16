import React, { Component } from 'react';

const Details = ({ match }) => (
    <div>
        <h2>Details</h2>
        <pre>{JSON.stringify(match)}</pre>
    </div>
);

export default Details;