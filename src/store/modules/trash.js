/*
 * @Date: 2021-03-21 17:41:02
 * @LastEditors: KerbalHao
 * @FilePath: \ever-note\src\store\modules\trash.js
 */
import Trash from '@/apis/trash'
import { Message } from 'element-ui'

const state = {
  trashNotes: null,// 回收站笔记列表
  curTrashNoteId: null // 选中的回收站笔记ID
}

const getters = {
  trashNotes: state => state.trashNotes || [],

  curTrashNote: (state, getters) => {
    if(!state.curTrashNoteId) return getters.trashNotes[0] || {}
    return state.trashNotes.find(note => note.id == state.curTrashNoteId) || {}
  },

  // 根据跟容器来获取当前笔记的所属笔记本
  belongTo: ( getters, rootGetters) => {
    let notebook = rootGetters.notebooks.find(notebook => notebook.id == getters.curTrashNote.notebookId) || {}
    return notebook.title || ''
  }
}

const mutations = {
  setTrashNotes(state, payload) {
    state.trashNotes = payload.trashNotes
  },

  addTrashNote(state, payload) {
    state.trashNotes.unshift(payload.note)
  },

  deleteTrashNote(state, payload) {
    state.trashNotes = state.trashNotes.filter(note => note.id != payload.noteId)
  },

  //设置当前选中的回收站笔记
  setCurTrashNote(state, payload = {}) {
    state.curTrashNoteId = payload.curTrashNoteId
  }

}

const actions = {
  getTrashNotes({ commit }) {
    return Trash.getAll()
      .then(res => {
        commit('setTrashNotes', { trashNotes: res.data })
      })
  },

  deleteTrashNote({ commit }, { noteId }) {
    return Trash.deleteNote({ noteId })
      .then(res => {
        commit('deleteTrashNote', { noteId })
        Message.success(res.msg)
      })
  },

  revertTrashNote({ commit }, { noteId }) {
    return Trash.revertNote({ noteId })
      .then(res => {
        commit('deleteTrashNote', { noteId })
        Message.success(res.msg)
      })
  }

}


export default {
  state,
  getters,
  mutations,
  actions
}