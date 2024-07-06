import { DELETE_USER, SUBMIT_USER, KEYWORD, EDIT_USER} from "./constant";

const actDeleteUser = (id) => {
    const action = {
        type: "DELETE_USER",
        payload: id,
    };
};

const actEditUser = (user) => {
    return {
        payload: user,
    };
};

const actSearch = (keyword) => {
    return {
        type: "KEYWORD",
        payload: keyword,
    }
}

const actSubmitUser = (user) => {
    return {
        type: "SUBMIT_USER",
        payload: user,
    }
}
export { actDeleteUser, actEditUser, actSearch, actSubmitUser };