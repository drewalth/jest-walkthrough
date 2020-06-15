import { httpClient } from '@/utils'

export function updateResource (payload) {
  return httpClient.post(payload.url, payload.data).then(res => res.data)
}
