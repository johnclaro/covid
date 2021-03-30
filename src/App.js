import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';

import store from './store';
import CasesPage from './components/CasesPage';
import SwabsPage from './components/SwabsPage';
import NotFoundPage from './components/NotFoundPage';


class App extends React.Component {

    render() {
        return(
            <Provider store={store}>
                <BrowserRouter basename={process.env.PUBLIC_URL}>
                    <Switch>
                        <Route exact path={process.env.PUBLIC_URL + '/'} component={CasesPage} />
                        <Route exact path={process.env.PUBLIC_URL + '/swabs'} component={SwabsPage} />
                        <Route component={NotFoundPage} />
                    </Switch>
                </BrowserRouter>
            </Provider>
        )
    }
}

export default App;
