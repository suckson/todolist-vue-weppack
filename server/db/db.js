const sha1 = require('sha1')
const axios = require('axios')

const className = ''

const request = axios.create({
  baseURL: 'http://d.apicload.com/mcm/api'
})

const createError = (code, resp) => {
  const err = new Error(resp.message)
  err.code = code
  return err
}
const handleRequest = ({status, data, ...rest}) => {
  if (status === 200) {
    return data
  } else {
    throw createError(status, rest)
  }
}

module.exports = (appId, appkey) => {
  const getHeaders = () => {
    const now = Date.now()
    return {
      'X-APICloud-AppId': appId,
      'X-APICloud-AppKey': `${sha1(`${appId}UZ${appkey}UZ${now}`)}.${now}`
    }
  }
  return {
    async getAllTodo () {
      return handleRequest(await request.get(`${className}`, {
        headers: getHeaders()
      }))
    }
  }
}
