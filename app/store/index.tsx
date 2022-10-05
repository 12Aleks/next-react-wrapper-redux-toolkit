import { configureStore, ThunkAction } from "@reduxjs/toolkit";
import {Action} from 'redux';
import subjectSlice from "./subjectSlice";
import {createWrapper} from 'next-redux-wrapper';


const makeStore = () => {
    return configureStore({ 
        reducer: {
            profile: subjectSlice,
        }
    })
}

export type AppStore = ReturnType<typeof makeStore>;
export type AppState = ReturnType<AppStore['getState']>;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, AppState, unknown, Action>;


export const wrapper = createWrapper<AppStore>(makeStore);
