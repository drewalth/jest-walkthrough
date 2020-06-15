import * as types from './mutations-types'

export default {

  [types.DATA_LOADING] (state) {
    Object.assign(state, { loading: true, error: null })
  },

  [types.DATA_SUCCESS] (state, payload) {
    if (payload.key) {
      state.data = payload.data[payload.key]
    } else {
      Object.assign(state, { data: payload })
    }

    state.loading = false
  },

  [types.DATA_ERROR] (state, payload) {
    Object.assign(state, {
      loading: false,
      data: null,
      error: payload || true
    })
  },

  [types.DATA_RESET] (state) {
    Object.assign(state, {
      data: null,
      error: false,
      loading: false
    })
  }
}
