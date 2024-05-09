import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'

const rootReducer = combineReducers({
    user: () => ({sumary: {colaborador: "teste", acessToken: 'dsafsdfsdf'}})
})

export default rootReducer
