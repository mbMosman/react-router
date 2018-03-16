import React from 'react';
import { Route, Link } from "react-router-dom";

import FarmAnimals from '../../components/FarmAnimals/FarmAnimals';
import ForestAnimals from '../../components/ForestAnimals/ForestAnimals';
import OceanAnimals from '../../components/OceanAnimals/OceanAnimals';

//const Animals = ( props ) => (
const Animals = ({ match }) => (
    <div>
        <h2>Animals</h2>
        <ul>
            <li><Link to={`${match.url}/farm`}>Farm</Link></li>
            <li><Link to={`${match.url}/forest`}>Forest</Link></li>
            <li><Link to={`${match.url}/ocean`}>Ocean</Link></li>
        </ul>
        <Route exact path={`${match.url}/farm`} component={FarmAnimals} />
        <Route path={`${match.url}/forest`} component={ForestAnimals} />
        <Route path={`${match.url}/ocean`} component={OceanAnimals} />
    </div>
);

export default Animals;
