import React from 'react';
import { connect } from 'react-redux';

const StoryBoard = ({ story }) => {
    const generateStory = () => story.map(item => <p key={item}>{item}</p>);

    return (
        <div className="history">
            {generateStory()}
        </div>
    )
};

export default connect( ({ story }) => ({
    story
}) )(StoryBoard);