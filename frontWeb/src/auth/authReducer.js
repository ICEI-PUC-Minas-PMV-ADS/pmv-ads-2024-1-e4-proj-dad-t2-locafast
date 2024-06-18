/*
const userKey = 'token'
const INITIAL_STATE = {
    user: JSON.parse(localStorage.getItem(userKey)),
    validToken: false
}

export default (state=INITIAL_STATE, action) => {
    switch (action.type) {
        case 'TOKEN_VALIDATED':
            if (action.payload) {
                return { ...state, validToken: true }
            } else {
                localStorage.removeItem(userKey)
                return { ...state, validToken: false, user: null }
            }
        case 'USER_FETCHED':
            localStorage.setItem(userKey, JSON.stringify(action.payload))
            return { ...state, user: action.payload, validToken: true }
        default:
            return state
    }
}

*/

import { LOGIN_SUCCESS } from '../actions/authActions';

const userKey = 'token';
const initialState = {
    user: JSON.parse(localStorage.getItem(userKey)),
    validToken: false
};

export default function authReducer(state = initialState, action) {
    switch (action.type) {
        case LOGIN_SUCCESS:
            localStorage.setItem(userKey, JSON.stringify(action.payload.user));
            return {
                ...state,
                user: action.payload.user,
                validToken: true
            };
        default:
            return state;
    }
}
