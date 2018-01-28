import React, { Component } from 'react';
import { Link } from 'react-router-dom';
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
                            <p className="card-text text-secondary p-1">{movies.description.substring(0, 130)}...</p>
                        </ul>
                    </div>
                    <Link className="btn btn-info text-center mr-3 ml-3 mb-2" to={`/Films/${movies.id}`}>Details</Link>                
                </div>
            )
        })
        return (movies)
    }
}

export default Films;