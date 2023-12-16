import { configureStore } from "@reduxjs/toolkit";
import User  from "./Slice";

export const store = configureStore({

    reducer:{
        app: User
    },
})

export default store