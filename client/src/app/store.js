// store.js
import {configureStore} from "@reduxjs/toolkit";
import themeReducer from "../features/theme/themeReducer";

const store = configureStore({
  reducer: {
    theme: themeReducer
  }
});

export default store;