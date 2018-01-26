import React, { Component } from 'react';
import CardImage from '../cardImage.jpg';
import 'isomorphic-fetch';
import 'es6-promise';

class Films extends Component {
    constructor(props) {
        super(props);

        this.state = {
            filmArray: [],
        };

    };

    componentDidMount() {
        fetch("https://ghibliapi.herokuapp.com/films")
            .then(res => res.json())
            .then(obj => this.setState({ filmArray: obj }))
    }

    render() {
        console.log(this.state.filmArray);
        let movies = this.state.filmArray.map((movies) => {
            return (

                <div className="card col-sm-6 mb-1 mt-2" key={movies.id}>
                    {console.log(movies.title)}
                    <img className="card-img-top pt-3" src={CardImage} alt="ay" />
                    <div className="card-body">
                        <h2 className="card-title text-info">{movies.title}</h2>
                        <ul>
                            <li className="card-text text-secondary p-1">{movies.description.substring(0, 175)}...</li>
                            <li className="card-text text-secondary p-1">{movies.director}</li>
                            <li className="card-text text-secondary p-1">{movies.producer}</li>
                        </ul>
                    </div>
                    <button className="btn btn-info d-inline align-bottom mb-3 " type="submit">Details</button>
                </div>

            )
        })
        return (movies)
    }
}

export default Films;