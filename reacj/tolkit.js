import {configureStore, createAction, createReducer} from "@reduxjs/toolkit";
// const  = toolkit;
const addToCard = createAction("ADD_TO_CARD")
const login = createAction("CREATE_SECTION")
// const initialState = {
//     card: []
// }
// Recucer
const cardReducer = createReducer([], (builder) => {
    builder.addCase(addToCard, (state, action) => {
        state.push(action.payload)
    })
})

const loginReducer = createReducer({status: false}, (builder) => {
    builder.addCase(login, (state, action) => {
        state.status = true
    })
})

// Store
const store = configureStore({
    reducer: {
        login: loginReducer,
        card: cardReducer,
    }
})

// On cretae
console.log('On Create',store.getState() );

// Subscribe
store.subscribe(() => {
    console.log('STROORE CHANEGE',store.getState() );
})

// const action1 = addToCard({id: 1, qnt: 30})
store.dispatch(addToCard({id: 1, qnt: 30}))
store.dispatch(addToCard({id: 3, qnt: 3}))
store.dispatch(login())
