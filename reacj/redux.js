import { legacy_createStore } from "redux";

// Reducer
const cardReducer = (state = {
    // login: false,
    card: [{id: 1, qnt: 10}],
}, action) => {
    switch (action.type) {
        case "ADD_TO_CARD":
            return {
                ...state,
                card: [...state.card, action.payload]
            }
        default:
            return state;
    }
}

// Store
const store = legacy_createStore(cardReducer)
console.log("On criate store", store.getState());

// subscribe
store.subscribe(() => {
    console.log('STORE CHANGE',  store.getState());
})
// dispatch
const action1 = { type: "ADD_TO_CARD", payload: {id: 2, qnt: 30}}
store.dispatch(action1)
const action2 = { type: "ADD_TO_CARD", payload: {id: 20, qnt: 130}}
store.dispatch(action2)