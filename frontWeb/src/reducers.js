import { combineReducers } from 'redux'

import AuthReducer from './auth/authReducer'

const rootReducer = combineReducers({
    user: () => ({
        auth: AuthReducer
    })
})

export default rootReducer
