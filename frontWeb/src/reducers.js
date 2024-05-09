import { combineReducers } from 'redux'

const rootReducer = combineReducers({
    user: () => ({sumary: {colaborador: "teste", acessToken: 'dsafsdfsdf'}})
})

export default rootReducer
