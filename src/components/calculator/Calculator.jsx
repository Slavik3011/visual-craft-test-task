import React from 'react';

import Display from './Display';
import KeyBoard from './KeyBoard';
import StoryBoard from './StoryBoard';

import './board.sass';

export default () => {
    return (
        <div className="calculator">
            <StoryBoard />
            <Display />
            <KeyBoard />
        </div>
    )
}