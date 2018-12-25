import axios from 'axios'
import qs from 'qs'
import { Toast, Indicator } from 'mint-ui'

// 创建axios实例
const service = axios.create({
  baseURL: 'http://47.95.114.208',
  timeout: 15000,
  headers: {
  }
})

// request拦截器
service.interceptors.request.use(config => {
//config.headers['vendorId'] = vendorId
  return config
}, error => {
  console.log(error) // for debug
  Promise.reject(error)
})

const API = class Api {
  constructor (url, params, cb) {
    this.url = url
    this.params = params
    this.cb = cb
  }
  get (url, params, cb, bool) {
    if (!bool) {
      Indicator.open({
        text: '加载中...',
        spinnerType: 'fading-circle'
      })
    }
    return service.get(url, {params: params}).then(function (res) {
      if (!bool) {
        Indicator.close()
      }
      cb(res.data)
    }).catch(function (err) {
      if (!bool) {
        Indicator.close()
      }
      Toast('发生未知错误，请关闭后重试')
      console.log(err)
    })
  }
  post (url, params, cb, bool) {
    if (!bool) {
      Indicator.open({
        text: '加载中...',
        spinnerType: 'fading-circle'
      })
    }
    return service.post(url, qs.stringify(params)).then(function (res) {
      if (!bool) {
        Indicator.close()
      }
      cb(res.data)
    }).catch(function (err) {
      if (!bool) {
        Indicator.close()
      }
      Toast('发生未知错误，请关闭后重试')
      console.log(err)
    })
  }
}

export default API
