import {bindActionCreators, createSlice} from '@reduxjs/toolkit'
import { HYDRATE } from 'next-redux-wrapper'
import { AppState } from '.';

const initialState = {
    firstname: 'firsst',
    todos: []
  };

const subjectSlice = createSlice({
    name: 'profile',
    initialState,
    reducers: {
        setProfileData: (state, action) => {
            state.firstname = action.payload;
        },
        setTodoData: (state, action) => {
            state.todos = action.payload
        }
    },
    extraReducers: {
        [HYDRATE]: (state, action) => {
            state.firstname = action.payload.profile.firstname
            state.todos = action.payload.profile.todos
        }
    }

})

export default subjectSlice.reducer
export const selectSetProfileData = (state: AppState) => state.profile
export const {setProfileData, setTodoData} = subjectSlice.actions