import axios from 'axios'
import { creatError } from './util'
const request = axios.create({
  baseURL: '/'
})

const handleRequest = (request) => {
  return new Promise((resolve, reject) => {
    request.then(resp => {
      const data = resp.data
      if (!data) {
        return reject(creatError(400, 'no data'))
      }
      if (!data) {
        return reject(creatError(400, data.message))
      }
      resolve(data.data)
    }).catch(err => {
      const resp = err.response
      console.log('---------------', resp)
      if (resp.status === 401) {
        reject(creatError(401, 'need auth'))
      }
    })
  })
}

export default {
  getAllTodos () {
    return handleRequest(request.get('/api/todos'))
  },
  login (username, password) {
    return handleRequest(request.post('/user/login', { username, password }))
  },
  updateTodo (id, todo) {
    return handleRequest(request.put(`/api/todo/${id}`, todo))
  },
  deleteTodo (id) {
    console.log(id)
    return handleRequest(request.delete(`/api/todo/${id}`))
  },
  deleteAllCompleted (ids) {
    return handleRequest(request.post('/api/delete/completed', { ids }))
  },
  createTodo (todo) {
    return handleRequest(request.post('/api/todo', todo))
  }

}
