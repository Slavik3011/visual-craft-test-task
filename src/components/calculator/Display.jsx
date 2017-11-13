import React from 'react';
import { connect } from 'react-redux';

const Display = ({ display }) => {
    return (
        <div className="display">
            <p>{display}</p>
        </div>
    )
}

export default connect( ({ display }) => ({
    display
}) )(Display);