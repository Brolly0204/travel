import axios from 'axios'

let cancel
let promiseArr = {}
const CancelToken = axios.CancelToken

axios.defaults.baseURL = '/api'

// 设置默认请求头
axios.defaults.headers = {
  // 'X-Requested-With': 'XMLHttpRequest'
}

// 设置超时时间
axios.defaults.timeout = 5000

// 请求拦截器
axios.interceptors.request.use(function (config) {
  // 使用 cancel token 取消请求 发起请求时，取消掉当前正在进行的相同请求
  if (promiseArr[config.url]) {
    promiseArr[config.url](`取消当前重复请求 ${config.url}`)
    promiseArr[config.url] = cancel
  } else {
    promiseArr[config.url] = cancel
  }
  return config
}, function(error) {
  if (error && error.response) {
    switch (error.response.status) {
      case 400:
        error.message = '错误请求'
        break
      case 401:
        error.message = '未授权，请重新登录'
        break
      case 403:
        error.message = '拒绝访问'
        break
      case 404:
        error.message = '请求错误,未找到该资源'
        break
      case 500:
        error.message = '服务器端出错'
        break
      default:
        error.message = `连接错误${error.response.status}`
    }
  } else {
    error.message = '连接到服务器失败'
  }
  return Promise.reject(error)
})

// 响应拦截器
axios.interceptors.response.use(function (response) {
  console.log('reponse', response)
  return response
}, function (error) {
  return Promise.reject(error)
})

// 移除拦截器
// var myInterceptor = axios.interceptors.request.use(function () {/*...*/});
// axios.interceptors.request.eject(myInterceptor);

export const get = (url, params = {}) => (
  axios.get(url, {
    params,
    cancelToken: new CancelToken(c => {
      cancel = c
    })
  })
)

export const post = (url, params = {}) => (
  axios.post(url, params)
)
