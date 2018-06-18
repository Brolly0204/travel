import { get } from '@/util/ajax'

export const getHomeInfo = () => (
  get('/index.json')
)
