import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Home from './Home'
import Films from './Films';
import SingleFilm from './SingleFilm';
import People from './People';
import SinglePerson from './SinglePerson';
import 'isomorphic-fetch';
import 'es6-promise';

class Form extends Component {

    render() {
        return (
            <React.Fragment>
                
                <Router>
                    <React.Fragment>
                    <div className="container text-center pt-5 pb-5">
                        <Link className="btn btn-light text-center mr-1" to="/Home">Home</Link>
                        <Link className="btn btn-light text-center mr-1" to="/Films">Movies</Link>
                        <Link className="btn btn-light text-center " to="/People">Characters</Link>
                    </div>
                        <Switch>
                            <div className="container">
                                <div className="row d-flex justify-content-between">
                                    <Route exact path="/Home" component={Home} />
                                    <Route exact path="/Films" component={Films} />
                                    <Route exact path="/Films/:id" component={SingleFilm} />
                                    <Route exact path="/People" component={People} />
                                    <Route exact path="/People/:id" component={SinglePerson} />
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