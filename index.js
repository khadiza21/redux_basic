//redux require from redux package and store in createStore Method. by this method , store is create
const { createStore } = require("redux");
//defining constants
const INCREMENT = "INCREMENT";
const DECREMENT = "DECREMENT";
const INCREMENT_COUNTER_BY_VALUE = "INCREMENT_COUNTER_BY_VALUE";

//state
const initialConterState = {
    count: 0,
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


const incrementCounterByValue = (value) => {
    return {
        type: INCREMENT_COUNTER_BY_VALUE,
        payload: value
    };
};

//create reducer for counter
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
        case INCREMENT_COUNTER_BY_VALUE:
            return {
                //spread state
                ...state,
                count: state.count + action.payload
            }
        case ADD_USER:
            return {
                //spread state
                users: [...state.user, action.payload],
                count: state.count + 1
            }
        default:
            state;
    }
}
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

//create Store
const store = createStore(counterReducer);
store.subscribe(() => {
    console.log(store.getState());
});


// dispatch action
store.dispatch(incrementCounter());
store.dispatch(incrementCounter());
store.dispatch(incrementCounter());
store.dispatch(decrementCounter());
store.dispatch(incrementCounterByValue(10));
