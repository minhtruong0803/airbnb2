import * as ActionType from "./constant";

const initialState = {
    listUsers: [
        {
            "id": 1,
            "fullname": "Dinh Phuc Nguyen",
            "username": "dpnguyen",
            "email": "dpnguyen@gmail.com",
            "phoneNumber": "123456789",
            "type": "VIP"
        },
        {
            "id": 2,
            "fullname": "Nguyen Van A",
            "username": "vana",
            "email": "vana@gmail.com",
            "phoneNumber": "123456789",
            "type": "USER"
        }
    ],
    keyword: "",
    editUser: null,
};

const userReducer = (state = initialState, action) => {
    /**
     * action: add/update; delete; edit; search
     * action = {
     *  type: "EDIT",
     *  payload: user
     * }
     */
    switch (action.type) {
        case "DELETE_USER":
            //Xoá user
            const { listUsers } = state;
            const usersFilter = listUsers.filter((user) => user.id !== action.payload);
            console.log(usersFilter);
            state.listUsers = usersFilter;
            return { ...state };

        case "KEYWORD":
            state.keyword = action.payload;
            return { ...state };

        case "SUBMIT_USER": {
            const user = action.payload;
            const listUsersClone = [...state.listUsers];
            if (user.id) {
                //update
                const index = listUsersClone.findIndex((item) => item.id === user.id);
                if (index !== -1) {
                    listUsersClone[index] = user;
                }
            } else {
                //add
                const date = new Date();
                // clone user
                const userNew = { ...user, id: date.getTime() };
                listUsersClone.push(userNew);
            }
            state.listUsers = listUsersClone;
            return { ...state };
        }

        case "EDIT_USER":{
            state.editUser = action.payload;
            return {...state};
        }
        default:
            return { ...state };

    }
};

export default userReducer;