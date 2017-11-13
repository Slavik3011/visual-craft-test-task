import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    NavLink
} from 'react-router-dom';

import './navigation.sass';

export default () => (
    <nav>
        <NavLink  to="/">Home</NavLink>
        <NavLink  to="/canvas">Canvas</NavLink>
        <NavLink  to="/matrix">Matrix</NavLink>
    </nav>
)
