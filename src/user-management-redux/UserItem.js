import React, { Component } from "react";
import {connect} from "react-redux";
import { actDeleteUser } from "../store/action";

class UserItem extends Component {
  render() {
    const { user, getEditUser } = this.props;
    return (
      <tr>
        <td>{user.fullname}</td>
        <td>{user.username}</td>
        <td>{user.email}</td>
        <td>{user.phoneNumber}</td>
        <td>{user.type}</td>
        <td>
          <button
            className="btn btn-info mr-2"
            data-toggle="modal"
            data-target="#modelIdUser"
            onClick={() => {getEditUser(user);}}
          >
            Edit
          </button>
          <button
            className="btn btn-danger"
            onClick={() => {
              this.props.deleteUser(user.id);
            }}
          >
            Delete
          </button>
        </td>
      </tr>
    );
  }
}

//mapDispatchToProps: guiwr action lên reducer
const mapDispatchToProps = (dispatch) => {
  return {
    //key: value
    deleteUser: (id) => {
      dispatch(actDeleteUser(id));
    },
    editUser: (user) => {
      dispatch(actEditUser(user));
    },
  };
};

export default connect(null, mapDispatchToProps) (UserItem);
