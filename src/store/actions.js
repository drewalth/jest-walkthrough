import * as types from './mutations-types'
import { getResource } from './services'

export default {

  async getProperty (context, data) {
    context.commit(types.DATA_LOADING)

    try {
      const result = await getResource(data.url)

      context.commit(types.DATA_SUCCESS, {
        key: data.key,
        data: result
      })
    } catch (error) {
      context.commit(types.DATA_ERROR, error)
    }
  },
  setProperty (context, data) {
    context.commit(types.DATA_SUCCESS, data)
  },
  resetData (context) {
    context.commit(types.DATA_RESET)
  }

}
