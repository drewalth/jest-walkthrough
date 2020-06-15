import { httpClient } from '@/utils'

export function getResource (url) {
  return httpClient.get(url).then(res => res.data)
}
