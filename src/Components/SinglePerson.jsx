import React, { Component } from 'react';
import CardImage from '../cardImage.jpg';
import 'isomorphic-fetch';
import 'es6-promise';

class SinglePerson extends Component {
    constructor(props) {
        super(props);

        this.state = {
            person: {}
        }
    }

    componentDidMount() {
        fetch(`https://ghibliapi.herokuapp.com/people/${this.props.match.params.id}`)
        .then(res => {return res.json()}).then(obj => {
            this.setState({person: obj})
        })
    }

    render() {
        let person = this.state.person
        return (
            <div className="card mb-3" key={person.id}>
                <img className="card-img-top p-3" src={CardImage} alt="" />
                <div className="card-block">
                <h2 className="card-title text-danger pl-4 pt-3">{person.name}</h2>
                <h4 className="card-title text-danger pl-4 pt-3 pb-1">Information</h4>
                <ul>
                    <li className="card-text text-secondary p-1">Gender: {person.gender}</li>
                    <li className="card-text text-secondary p-1">Age: {person.age}</li>                    
                    <li className="card-text text-secondary p-1">Eye Color: {person.eye_color}</li>                   
                    <li className="card-text text-secondary p-1">Hair Color: {person.hair_color}</li>    
                </ul>
                </div>
            </div>
        )
    }
}

export default SinglePerson