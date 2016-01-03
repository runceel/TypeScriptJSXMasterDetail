import * as React from 'react';
import {Link, Router, Route} from 'react-router';
import {AppBar, IconButton} from 'material-ui';
import Bone = require('material-ui-mdi/icons/bone');
import Plus = require('material-ui-mdi/icons/plus');
import BrowserHistory from './../actions/BrowserHistory';

interface MasterDetailAppProps extends React.Props<{}> {
}

interface MasterDetailStore {
}

export default class MasterDetailApp extends React.Component<MasterDetailAppProps, MasterDetailStore> {
    render() {
        return (
            <div>
                <AppBar 
                    title='Master detail サンプル'
                    iconElementLeft={<Link to='/'><IconButton><Bone /></IconButton></Link>} />
                <div className='container'>
                    <Link to='/create'><IconButton><Plus /></IconButton></Link>
                    {this.props.children}
                </div>
            </div>
        );
    }
}