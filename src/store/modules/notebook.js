/*
 * @Date: 2021-03-21 17:01:02
 * @LastEditors: KerbalHao
 * @FilePath: \ever-note\src\store\modules\notebook.js
 */
import Notebook from "@/apis/notebooks";
import { Message } from "element-ui";
const state = {
  notebooks: null, // 笔记本列表
  curBookId: null // 当前笔记本Id
};
const getters = {
  notebooks: (state) => state.notebooks || [],

  //根据 state 内的属性惰性获得当前的笔记本
  curBook: (state) => {
    //  若当前笔记本列表不是数组则返回空
    if (!Array.isArray(state.notebooks)) return {};
    // 若无当前笔记本 id 则默认返回第一个笔记本
    // 或设置为空
    if (!state.curBookId) return state.notebooks[0] || {};

    // 从笔记本列表中找到与当前笔记本 id 相符的笔记本
    return (
      state.notebooks.find((notebook) => notebook.id == state.curBookId) || {}
    );
  }
};

const mutations = {
  // 设置本地笔记本
  setNotebooks(state, payload) {
    state.notebooks = payload.notebooks;
  },
  // 添加本地笔记本
  addNotebook(state, payload) {
    state.notebooks.unshift(payload.notebook);
  },
  // 更新本地笔记本
  updateNotebook(state, payload) {
    let notebook =
      state.notebooks.find((notebook) => notebook.id == payload.notebookId) ||
      {};
    notebook.title = payload.title;
  },
  // 删除本地笔记本
  deleteNotebook(state, payload) {
    state.notebooks = state.notebooks.filter(
      (notebook) => notebook.id !== payload.notebookId
    );
  },
  // 设置当前笔记本ID
  setCurBook(state, payload) {
    state.curBookId = payload.curBookId;
  },
};

const actions = {
  // 调用接口获取所有笔记本
  getNotebooks({ commit }) {
    return Notebook.getAll().then((res) =>
      commit("setNotebooks", { notebooks: res.data })
    );
  },
  // 调用接口添加笔记本
  addNotebook({ commit }, payload) {
    return Notebook.addNotebook({ title: payload.title }).then((res) => {
      res.data.noteCounts = 0
      commit("addNotebook", { notebook: res.data });
      Message.success(res.msg);
    });
  },

  updateNotebook({ commit }, payload) {
    return Notebook.updateNotebook(payload.notebookId, {
      title: payload.title
    }).then((res) => {
      commit("updateNotebook", {
        notebookId: payload.notebookId,
        title: payload.title
      });
      Message.success(res.msg);
    });
  },
  deleteNotebook({ commit }, payload) {
    return Notebook.deleteNotebook(payload.notebookId).then((res) => {
      commit("deleteNotebook", { notebookId: payload.notebookId });
      Message.success(res.msg);
    });
  }
};

export default {
  state,
  getters,
  mutations,
  actions
};
