import cartReducer from './cartSlice'

const { configureStore } = require("@reduxjs/toolkit");

const appStore = configureStore({
    //add slice to redux store
    reducer: {
        cart: cartReducer
    }

});

export default appStore;