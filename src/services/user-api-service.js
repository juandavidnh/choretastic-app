import TokenService from './token-service'
import config from '../config'

const UserApiService = {
    getUsers() {
        return fetch(`${config.API_ENDPOINT}/users`, {
            method: 'GET',
            headers: {
                'Authorization': `bearer ${TokenService.getAuthToken()}`,
                'content-type': 'application/json'
            }
        })
            .then(res =>
                (!res.ok)
                    ? res.json().then(e => Promise.reject(e))
                    : res.json()
                )
    },

    insertHome(user_id, home_id){
        return fetch(`${config.API_ENDPOINT}/users/user-id/${user_id}`, {
            method: 'PATCH',
            headers: {
                'Authorization': `bearer ${TokenService.getAuthToken()}`,
                'content-type': 'application/json'
            },
            body: JSON.stringify({
                home_id
            })
        })
            .then(res => 
                (!res.ok)
                    ? res.json().then(e => Promise.reject(e))
                    : res.json()
                )
    },

    addUser(first_name, last_name, nickname="", email, password){
        return fetch(`${config.API_ENDPOINT}/users/add-user`, {
            method: 'POST',
            headers: {
                'Authorization': `bearer ${TokenService.getAuthToken()}`,
                'content-type': 'application/json'
            },
            body: JSON.stringify({
                first_name,
                last_name,
                nickname,
                email,
                password
            })
        })
        .then(res => 
            (!res.ok)
                ? res.json().then(e => Promise.reject(e))
                : res.json()
            )
    },

    addPoints(user_id, points){
        return fetch(`${config.API_ENDPOINT}/users/user-id/${user_id}`, {
            method: 'PATCH',
            headers: {
                'Authorization': `bearer ${TokenService.getAuthToken()}`,
                'content-type': 'application/json'
            },
            body: JSON.stringify({
                points
            })
        })
        .then(res => 
            (!res.ok)
                ? res.json().then(e => Promise.reject(e))
                : res.json()
            )
    },

    getById(user_id){
        return fetch(`${config.API_ENDPOINT}/users/user-id/${user_id}`, {
            method: 'GET',
            headers: {
                'Authorization': `bearer ${TokenService.getAuthToken()}`,
                'content-type': 'application/json'
            }
        })
        .then(res => 
            (!res.ok)
                ? res.json().then(e => Promise.reject(e))
                : res.json()
            )
    }
}

export default UserApiService
