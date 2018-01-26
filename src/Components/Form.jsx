import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Jumbo from './Jumbo';
import Films from './Films';
import People from './People';
// import Cards from './Cards'
import 'isomorphic-fetch';
import 'es6-promise';

class Form extends Component {

    render() {
        return (
            <React.Fragment>
                <div className="jumbotron jumbotron-fluid d-flex justify-content-center">
                    <Jumbo />
                </div>
                <Router>
                    <React.Fragment>
                    <div className="container text-center">
                        <Link className="btn btn-info text-center mr-1" to="/Films">List Movies</Link>
                        <Link className="btn btn-info text-center " to="/People">List Characters</Link>
                    </div>
                        <Switch>
                            <div className="container">
                                <div className="row d-flex justify-content-between">
                                    <Route exact path="/Films" component={Films} />
                                    <Route exact path="/People" component={People} />
                                </div>
                            </div>
                        </Switch>
                    </React.Fragment>
                </Router>
            </React.Fragment>
        )
    }
}

export default Form;