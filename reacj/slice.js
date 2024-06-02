import {configureStore, createSlice} from "@reduxjs/toolkit";

const cardSlice = createSlice({
    name: "card",
    initialState: [],
    reducers: {
        addToCard(state, action) {
            state.push(action.payload)
        }
    }
})

// Store
const store = configureStore({
    reducer: {
        card: cardSlice.reducer
    }
})

console.log('On Cretare Store Change', store.getState());

// Subscribe
store.subscribe(() => {
    console.log('STORE CHANGE', store.getState());
})

store.dispatch(cardSlice.actions.addToCard({id: 1, qnt: 10}))
store.dispatch(cardSlice.actions.addToCard({id: 1, qnt: 1}))