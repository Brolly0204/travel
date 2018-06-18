import axios from 'axios'

axios.defaults.baseURL = '/api'

export const get = (url, params = {}) => (
  axios.get(url, {params})
)

export const post = (url, params = {}) => (
  axios.post(url, params)
)
