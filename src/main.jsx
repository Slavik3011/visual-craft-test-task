import React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import App from './components/App';
import reducer from './reducers';

const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

const renderApp = Component => {
    render(
        <AppContainer>
            <Provider key={ module.hot ? Date.now() : store} store={store}>
                <Component />
            </Provider>
        </AppContainer>,
        document.getElementById('root')
    );
};

renderApp(App);

if (module.hot) {
    module.hot.accept('./components/App', () => { renderApp(App); });
}