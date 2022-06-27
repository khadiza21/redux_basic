const { createStore } = require("redux");
//defining constants
const INCREMENT = "INCREMENT";
const DECREMENT = "DECREMENT";
const ADD_USER = "ADD_USER";

//state
const initialConterState = {
    count: 0,
}
const initialUsersState = {
    users: [{ name: "Bibi Khadiza" }],
}
//action - object : type, payload
const incrementCounter = () => {
    return {
        type: INCREMENT,
    };
};

const decrementCounter = () => {
    return {
        type: DECREMENT,
    };
};

const addUser = (user) => {
    return {
        type: ADD_USER,
        // payload: {name: "Khadiza"},
        payload: user
    };
};

// create reducer for counter
const counterReducer = (state = initialConterState, action) => {
    switch (action.type) {
        case INCREMENT:
            return {
                //spread state
                ...state,
                count: state.count + 1
            }
        case DECREMENT:
            return {
                //spread state
                ...state,
                count: state.count - 1
            }



        default:
            state;
    }

}