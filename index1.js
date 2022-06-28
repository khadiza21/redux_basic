//redux require from redux package and store in createStore Method. by this method , store is create
const { createStore } = require("redux");
//defining constants
const ADD_USER = "ADD_USER";

//state
const initialUsersState = {
    // users: [{ name: "Bibi Khadiza" }],
    users: ["Bibi Khadiza"],
    count: 1,
}
// //action - object : type, payload
const addUser = (user) => {
    return {
        type: ADD_USER,
        // payload: {name: "Khadiza"},
        payload: user
    };
};
// create reducer for counter
const counterUser = (state = initialUsersState, action) => {
    switch (action.type) {
        case ADD_USER:
            return {
                //spread state
                users: [...state.users, action.payload],
                count: state.count + 1
            }
        default:
            state;
    }
}
// create Store
const store = createStore(counterUser);
store.subscribe(() => {
    console.log(store.getState());
});
// dispatch action
store.dispatch(addUser("TANU"));
store.dispatch(addUser("PINU"));