import * as React from 'react';
import {Navbar, PageHeader, NavBrand, Nav, NavItem} from 'react-bootstrap';
import {Link, Router, Route} from 'react-router';

interface MasterDetailAppProps extends React.Props<{}> {
}

interface MasterDetailStore {
}

export default class MasterDetailApp extends React.Component<MasterDetailAppProps, MasterDetailStore> {
    render() {
        return (
            <div>
                <Navbar>
                    <NavBrand>
                        <a href='#'>Master Detail アプリケーション</a>
                    </NavBrand>
                    <Nav>
                        <NavItem><Link label='Master' to='/' /></NavItem>
                    </Nav>
                </Navbar>
                <div id='container'>
                    {this.props.children}
                </div>
            </div>
        );
    }
}