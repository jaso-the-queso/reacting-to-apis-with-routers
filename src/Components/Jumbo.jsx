import React, { Component } from 'react';
import Logo from '../Studio_Ghibli_logo.svg.png'

class Jumbo extends Component {

    render() {
        return (
            
            <div className="jumbotron jumbotron-fluid d-flex justify-content-center">
                <img className='w-100 h-100'src={Logo} alt="ay"  />
            </div>
        )
    }
}

export default Jumbo;