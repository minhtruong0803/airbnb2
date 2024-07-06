import React, { Component } from 'react'

export default class Child extends Component {
    handleResetUsername = () => {
        const usernameReset = "Cyber";
        // truyền data ra component cha, thông qua props UserReset
        this.props.getUserReset(usernameReset);
    }



  render() {
    return (
      <div>
        <h2>Child</h2>
        <p>Username: {this.props.username}</p>
        <button className="btn btn-danger" onClick={this.props.usernameReset}>Reset Username</button>
      </div>
    )
  }
}
