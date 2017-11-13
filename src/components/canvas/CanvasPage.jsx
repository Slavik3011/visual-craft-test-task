import React from 'react';

import Rectangle from './Rectangle';
import './canvasPage.sass';

export default () => (
    <div className="canvases">
        <Rectangle />
        <Rectangle height={300} color={"green"} point={9} />
    </div>
)
