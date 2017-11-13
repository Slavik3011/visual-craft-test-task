import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { BrowserRouter as Router, Route} from 'react-router-dom';

import Calculator from './calculator/Calculator';
import Navigation from './navigation/Navigation';
import CanvasPage from './canvas/CanvasPage';
import MatrixPage from './matrix/MatrixPage';
import 'normalize.css';


export default class App extends React.Component {
    render() {
        return (
            <MuiThemeProvider>
                <Router>
                    <div style={{display: 'flex', height: '100vh'}}>
                        <Route exact path="/" component={Calculator} />
                        <Route exact path="/canvas" component={CanvasPage} />
                        <Route exact path="/matrix" component={MatrixPage} />
                        <Navigation />
                    </div>
                </Router>
            </MuiThemeProvider>
        )
    }
}

