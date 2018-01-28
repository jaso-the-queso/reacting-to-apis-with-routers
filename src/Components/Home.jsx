import React, { Component } from 'react';
import Jumbo from './Jumbo';
import 'isomorphic-fetch';
import 'es6-promise';
 
class Home extends Component {
    constructor (props) {
        super(props);

        this.state = {
        }
    }
    
    render () {
        return (
            <div class="container-fluid">
                <Jumbo />
                <div class="container-fluid mt-4 mb-5 border rounded">
                    <h1 className="display-4 text-center pt-4">Welcome to the Studio Ghibli API!</h1>
                    <p className="lead text-center pb-5">Click the links above to learn more about the films made by Studio Ghibli and the respective characters of each film.</p>
                </div>
            </div>
        )
    }
}

export default Home