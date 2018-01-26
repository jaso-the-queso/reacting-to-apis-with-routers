import React, { Component } from 'react';
import CardImage from '../cardImage.jpg';
import 'isomorphic-fetch';
import 'es6-promise';

class People extends Component {
    constructor(props) {
        super(props);

        this.state = {
            peopleArray: [],
        };

    };

    componentDidMount() {
        fetch("https://ghibliapi.herokuapp.com/people")
            .then(res => res.json())
            .then(obj => this.setState({ peopleArray: obj }))
    }

    render() {
        console.log(this.state.peopleArray);
        let characters = this.state.peopleArray.map((characters) => {
            return (

                <div className="card col-sm-6 mb-1 mt-2" key={characters.id}>
                    {console.log(characters.title)}
                    <img className="card-img-top pt-3" src={CardImage} alt="ay" />
                    <div className="card-body">
                        <h2 className="card-title text-info">{characters.name}</h2>
                        <ul>
                            <li className="card-text text-secondary p-1">{characters.gender}</li>
                            <li className="card-text text-secondary p-1">{characters.age}</li>
                            <li className="card-text text-secondary p-1">{characters.eye_color}</li>
                        </ul>
                        <button className="btn btn-info" type="submit">Details</button>
                    </div>
                </div>

            )
        })
        return (characters)
    }
}

export default People;