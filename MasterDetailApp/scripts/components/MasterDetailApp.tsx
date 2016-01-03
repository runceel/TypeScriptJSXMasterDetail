import * as React from 'react';
import {Navbar, NavBrand, Nav, NavItem} from 'react-bootstrap';
import {Link, Router, Route} from 'react-router';

interface MasterDetailAppProps extends React.Props<{}> {
}

interface MasterDetailStore {
}

export default class MasterDetailApp extends React.Component<MasterDetailAppProps, MasterDetailStore> {
    render() {
        return (
            <div>
                <div className='navbar navbar-default'>
                    <div className='container-fluid'>
                        <div className='navbar-header'>
                             <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                                <span className="sr-only">Toggle navigation</span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                              </button>
                              <a className="navbar-brand" href="#">Brand</a>
                        </div>

                        <div className='collapse navbar-collapse'>
                            <ul className='nav navbar-nav'>
                                <li><Link to='/create'>追加</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className='container'>
                    {this.props.children}
                </div>
            </div>
        );
    }
}