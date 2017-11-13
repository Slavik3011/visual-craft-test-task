import { combineReducers } from 'redux';

import display from './display';
import story from './story'

export default combineReducers({
    display,
    story
})