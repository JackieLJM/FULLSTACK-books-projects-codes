import { createSlice } from "redux-starter-kit";
import { createStore, combineReducers } from "redux";

const counter = createSlice({
  slice: "counter", // slice is optional, and could be blank ''
  initialState: 0,
  reducers: {
    increment: state => state + 1,
    decrement: state => state - 1,
    multiply: (state, action) => state * action.payload
  }
});

const user = createSlice({
  slice: "user",
  initialState: { name: "", age: 20 },
  reducers: {
    setUserName: (state, action) => {
      state.name = action.payload; // mutate the state all you want with immer
    }
  },
  extraReducers: {
    [counter.actions.increment]: (state, action) => {
      state.age += 1;
    }
  }
});

const reducer = combineReducers({
  counter: counter.reducer,
  user: user.reducer
});

const store = createStore(reducer);

store.dispatch(counter.actions.increment());
// -> { counter: 1, user: {name : '', age: 21} }
store.dispatch(counter.actions.increment());
// -> { counter: 2, user: {name: '', age: 22} }
store.dispatch(counter.actions.multiply(3));
// -> { counter: 6, user: {name: '', age: 22} }
console.log(`${counter.actions.decrement}`);
// -> "counter/decrement"
store.dispatch(user.actions.setUserName("eric"));
// -> { counter: 6, user: { name: 'eric', age: 22} }
const state = store.getState();
console.log(user.selectors.getUser(state));
// -> { name: 'eric', age: 22 }
console.log(counter.selectors.getCounter(state));
