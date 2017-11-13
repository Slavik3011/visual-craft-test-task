import React from 'react';

import Matrix from './Matrix';
import './matrix.sass';

export default () => (
    <div className="matrix">
        <Matrix />
        <Matrix width={15} height={10} />
    </div>
);
