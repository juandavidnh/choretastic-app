import TokenService from './token-service'
import config from '../config'

const TaskApiService = {
    getTasks() {
        return fetch(`${config.API_ENDPOINT}/tasks`,{
            method: 'GET',
            headers: {
                'content-type': 'application/json',
                'Authorization': `bearer ${TokenService.getAuthToken()}`
            },
        })
            .then(res => 
                (!res.ok)
                    ? res.json().then(e => Promise.reject(e))
                    : res.json()
                )
    },

    getOwnTasks(){
        return fetch(`${config.API_ENDPOINT}/tasks/own`,{
            method: 'GET',
            headers: {
                'content-type': 'application/json',
                'Authorization': `bearer ${TokenService.getAuthToken()}`
            },
        })
            .then(res => 
                (!res.ok)
                    ? res.json().then(e => Promise.reject(e))
                    : res.json()
                )
    },

    getTask(taskId) {
        return fetch(`${config.API_ENDPOINT}/tasks/${taskId}`, {
            method: 'GET',
            headers: {
                'content-type': 'application/json',
                'Authorization': `bearer ${TokenService.getAuthToken()}`
            }
        })
            .then(res =>
                (!res.ok)
                    ? res.json().then(e => Promise.reject(e))
                    : res.json()
                )
    },

    postTask(task_name, assignee_id, points) {
        return fetch(`${config.API_ENDPOINT}/tasks`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                'Authorization': `bearer ${TokenService.getAuthToken()}`
            },
            body: JSON.stringify({
                task_name,
                assignee_id,
                points
            })
        })
            .then(res => 
                (!res.ok)
                    ? res.json().then(e => Promise.reject(e))
                    : res.json()
                )
    },

    deleteTask(taskId) {
        return fetch(`${config.API_ENDPOINT}/tasks/${taskId}`, {
            method: 'DELETE',
            headers: {
                'content-type': 'application/json',
                'Authorization': `bearer ${TokenService.getAuthToken()}`
            }
        })
            .then(res => 
                (!res.ok)
                    ? res.json().then(e => Promise.reject(e))
                    : res.json()
                )
    },

    assignTask(taskId, userId) {
        return fetch(`${config.API_ENDPOINT}/tasks/${taskId}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json',
                'Authorization': `bearer ${TokenService.getAuthToken()}`
            },
            body: JSON.stringify({
                assignee_id: userId
            })
        })
            .then(res => 
                (!res.ok)
                    ? res.json().then(e => Promise.reject(e))
                    : res.json() 
                )
    },

    checkOffTask(taskId) {
        return fetch(`${config.API_ENDPOINT}/tasks/${taskId}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json',
                'Authorization': `bearer ${TokenService.getAuthToken()}`
            },
            body: JSON.stringify({
                status: 'complete'
            })
        })
            .then(res => 
                (!res.ok)
                    ? res.json().then(e => Promise.reject(e))
                    : res.json() 
                )
    }
}

export default TaskApiService