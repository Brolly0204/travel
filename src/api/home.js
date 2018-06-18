import { get } from './ajax'

export const getHomeInfo = () => (
  get('/index.json')
)
