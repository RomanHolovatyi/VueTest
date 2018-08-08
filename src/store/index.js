import Vue from 'vue'
import Vuex from 'vuex'
import * as types from './mutation-types'

Vue.use(Vuex)

const state = {
  tableData: JSON.parse(localStorage.getItem('tableData')) || []
}

const getters = {
}

const actions = {
  createTableItem ({ commit }, newItem) {
    localStorage.setItem('tableData', JSON.stringify([...state.tableData, newItem]))
    commit(types.UPDATE_TABLE_ITEMS, newItem)
  },
  deleteTableItem ({ commit }, itemId) {

  }
}

const mutations = {
  [types.UPDATE_TABLE_ITEMS] (state, newItem) {
    state.tableData = [...state.tableData, newItem]
  }
}

export default new Vuex.Store({
  state,
  actions,
  mutations,
  getters
})
