import { configureStore } from '@reduxjs/toolkit';
import userSlice from '../containers/User/userSlice';
import filmSlice from "../containers/Film/filmSlice";

export default configureStore({
    reducer: {
        user: userSlice,
        film: filmSlice,
    }
});