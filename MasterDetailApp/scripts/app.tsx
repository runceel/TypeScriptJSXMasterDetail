import * as React from 'react';
import * as ReactDOM from 'react-dom';
import MasterDetailApp from './components/MasterDetailApp';
import MasterComposer from './components/MasterComposer';
import DetailComposer from './components/DetailComposer';
import CreateComposer from './components/CreateComposer';
import MasterActionCreator from './actions/MasterActionCreator';
import BrowserHistory from './actions/BrowserHistory';
import {Link, Router, Route, IndexRoute} from 'react-router';

MasterActionCreator.count();

var routes = (
    <Router history={BrowserHistory}>
        <Route path='/' component={MasterDetailApp}>
            <IndexRoute component={MasterComposer} />
            <Route path='/detail/:id' component={DetailComposer} />
            <Route path='/create' component={CreateComposer} />
        </Route>
    </Router>
);

ReactDOM.render(
    routes,
    document.getElementById('content'));
