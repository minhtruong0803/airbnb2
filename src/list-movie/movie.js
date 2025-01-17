import React, { Component } from 'react'
import { data } from 'jquery';

export default class Movie extends Component {
    render() {
    const { movie } = this.props;
        return (
            <div className="col-md-4">
                <div className="card">
                    <img className="card-img-top" src={movie.hinhAnh} />
                    <div className="card-body">
                        <h4 className="card-title">{movie.tenPhim}</h4>
                        <p className="card-text">{movie.moTa}</p>
                    </div>
                </div>
            </div>
        );
    }
}
