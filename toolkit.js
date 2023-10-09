import toolkit from '@reduxjs/toolkit';

const { configureStore, createAction, createReducer } = toolkit;

// reducer
const addToCart = createAction("ADD_TO_CART");
const cartReducer = createReducer([], (builder) => {
  builder.addCase(addToCart, (state, action) => {
    state.push(action.payload);
  });
});

const login = createAction("CREATE_SESSION");
const loginReducer = createReducer({ status: false }, (builder) => {
  builder.addCase(login, (state, action) => {
    state.status = true;
  });
});

// store
const store = configureStore({
  reducer: {
    cart: cartReducer,
    login: loginReducer
  }
});
console.log("STORE", store.getState());

// subscribe
store.subscribe(() => {
  console.log("STORE CHANGE", store.getState());
});

// action
store.dispatch(addToCart({ id: 1, quantity: 20 }));
store.dispatch(addToCart({ id: 2, quantity: 5 }));
store.dispatch(login());
