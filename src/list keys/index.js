import React, { Component } from 'react'
import data from "./data.json";

export default class ListKeys extends Component {
    constructor(props) {
        super(props);
        this.state = {
            listUser: [
                { username: "A", age: 18 },
                { username: "B", age: 18 },
                { username: "C", age: 18 },
            ],
            listMovie: data,
        };
    }

    renderListUser = () => {
        this.state.listUser.map((item, index) => {
            return (
                <li key={index}>
                    Ten: {item.username} - Age: {item.age};
                </li>
            )
        });
    }

    renderListMovie = () => {
       return this.state.listMovie.map((item) => {
            return (
                <div key={item.maPhim} className="col-md-3">
                    <div class="card">
                        <img class="card-img-top" src={item.hinhAnh} alt="" />
                        <div class="card-body">
                            <h4 class="card-title">{item.tenPhim}</h4>
                            <p class="card-text">{item.moTa}</p>
                        </div>
                    </div>
                </div>
            )
        })
    }

    render() {
        return (
            <div>
                <h2>ListKeys</h2>
                <ul>
                    {this.state.listUser.map((item, index) => {
                        return (
                            <li key={index}>
                                Ten: {item.username} - Tuoi: {item.age}
                            </li>
                        )
                    })}
                </ul>
                <hr />
                <ul>{this.renderListUser()}</ul>
                <hr />
                <div className="container">
                    <div className="row">
                        {this.renderListMovie()}
                    </div>
                </div>
            </div>
        )
    }
}
