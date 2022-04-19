import { createAction, createReducer } from "@reduxjs/toolkit";

export const setVisibleNavBav = createAction('SET_VISIBLE_NAVBAR')

const navBarReducer = createReducer(true, {
    [setVisibleNavBav] : (state, action) => action.payload
})

export default navBarReducer