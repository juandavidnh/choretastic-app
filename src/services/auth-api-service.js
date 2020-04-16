import config from '../config'
import TokenService from './token-service'

const AuthApiService = {
    postLoginUser(credentials) {
        return fetch(`${config.API_ENDPOINT}/auth-user/login`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(credentials)
        })
        .then(res => 
            (!res.ok)
                ? res.json().then(e => Promise.reject(e))
                : res.json()
        )
    },

    postUser(user) {
        return fetch(`${config.API_ENDPOINT}/users/sign-up`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(user),
        })
        .then(res => 
            (!res.ok)
                ? res.json().then(e => Promise.reject(e))
                : res.json()
        )
    },

    postLoginHome(credentials) {
        return fetch(`${config.API_ENDPOINT}/auth-home/login`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(credentials)
        })
        .then(res =>
            (!res.ok)
                ? res.json().then(e => Promise.reject(e))
                : res.json()
        )
    },

    postHome(home) {
        return fetch(`${config.API_ENDPOINT}/homes/add-home`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                'Authorization': `bearer ${TokenService.getAuthToken()}`
            },
            body: JSON.stringify(home),
        })
        .then(res =>
            (!res.ok)
                ? res.json().then(e => Promise.reject(e))
                : res.json()
        )
    }
}

export default AuthApiService