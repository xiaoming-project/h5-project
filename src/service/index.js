import Api from '@/service/api'
let api = new Api()
let common = process.env.NODE_ENV == "development" ? '/api' : ''

export function getData (params, cb) {
  return api.get('/links.json', params, cb)
}
