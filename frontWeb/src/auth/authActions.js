import { actions, toastr } from 'react-redux-toastr'
import axios from 'axios'
import consts from '../consts/consts'

export function login(values) {
    return submit(values, `${consts.API_URL}/login`)
}

export function signup(values) {
    return submit(values, `${consts.API_URL}/colaborador`)
}

function submit(values, url) {
    return dispatch => {
        axios.post(url, values)
            .then(resp => {
                dispatch([
                    { type: 'USER_FECHED', payload: resp.data }
                ])
            })
            .catch(e => {
                e.response.data.errors.forEach(
                    error => toastr.error('Erro', error)
                );
            })
    }
}

export function logout() {
    return { type: 'TOKEN_VALIDATED', payload: false }
}

export function validadeLogin(data){
    return dispatch => {
        if(token){
            axios.post(`${actions.API_URL}/login`, data)
                .then(resp => {
                    dispatch({type: 'TOKEN_VALIDATED', payload: resp.data.valid})
                })
                .catch(e => dispatch({type: 'TOKEN_VALIDATED', payload: false}))
        }
    }
}
