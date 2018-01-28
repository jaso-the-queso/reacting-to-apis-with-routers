import React, { Component } from 'react';
import CardImage from '../cardImage.jpg';
import 'isomorphic-fetch';
import 'es6-promise';

class SingleFilm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            movie: {}
        }
    }

    componentDidMount() {
        fetch(`https://ghibliapi.herokuapp.com/films/${this.props.match.params.id}`)
        .then(res => {return res.json()}).then(obj => {
            this.setState({movie: obj})
        })
    }

    render() {
        let movie = this.state.movie
        return (
            <div class="card mb-3" key={movie.id}>
                <img className="card-img-top p-3" src={CardImage} alt="" />
                <div className="card-block">
                <h2 className="card-title text-info pl-3 pt-3 pb-2">{movie.title}</h2>                    
                <p className="card-text lead text-secondary pl-5 pr-5">{movie.description}</p>
                <h4 className="card-title text-info pl-4 pt-3 pb-1">Additional Information</h4>
                <ul>
                    <li className="card-text text-secondary p-1">Director: {movie.director}</li>
                    <li className="card-text text-secondary p-1">Producer: {movie.producer}</li>                    
                    <li className="card-text text-secondary p-1">Release Date: {movie.release_date}</li>                   
                    <li className="card-text text-secondary p-1">Rotten Tomato Score: {movie.rt_score}</li>                
                </ul>
                </div>
            </div>
        )
    }
} 

export default SingleFilm; 