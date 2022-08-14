import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartRedux";
import tokenReducer from "./tokenRedux";
import recentlyReducer from "./recentlyRedux";

export default configureStore({
  reducer: {
    cart: cartReducer,
    token: tokenReducer,
    recently: recentlyReducer,
  },
});
