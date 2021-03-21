<!--
 * @Date: 2021-03-20 20:33:24
 * @LastEditors: KerbalHao
 * @FilePath: \ever-note\src\components\NoteSidebar.vue
-->
<template>
  <div class="note-sidebar">
    <span class="btn add-note" @click="onAddNote">添加笔记</span>
    <el-dropdown
      class="notebook-title"
      @command="handleCommand"
      placement="bottom"
    >
      <span class="el-dropdown-link"
        >{{ curBook.title }} <i class="iconfont icon-down"></i
      ></span>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item
          v-for="notebook in notebooks"
          :command="notebook.id"
          :key="notebook.id"
        >
          笔记本：{{ notebook.title }}
        </el-dropdown-item>
        <el-dropdown-item command="trash">回收站</el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
    <div class="menu">
      <div>更新时间</div>
      <div>标题</div>
    </div>
    <ul class="notes">
      <li v-for="note in notes" :key="note.id">
        <router-link :to="`/note?noteId=${note.id}&$notebook=${curBook.id}`">
          <span class="date">{{ note.updatedAtFriendly }}</span>
          <span class="title">{{ note.title }}</span></router-link
        >
      </li>
    </ul>
  </div>
</template>

<script>
import { mapGetters, mapMutations, mapActions } from "vuex";

export default {
  props: ["curNote"],
  data() {
    return {};
  },
  computed: {
    ...mapGetters(["notebooks", "notes", "curBook"])
  },
  created() {
    // 进入获取当前所有笔记本
    this.getNotebooks()
      .then(() => {
        // 设置当前笔记本ID
        this.setCurBook({ curBookId: this.$route.query.notebookId });
        // 获取当前笔记本的所有笔记
        return this.getNotes({ notebookId: this.curBook.id });
      })
      .then(() => {
        // 设置当前笔记Id,getter 中会根据id 获取笔记
        this.setCurNote({ curNoteId: this.$route.query.noteId });
      });
  },
  methods: {
    ...mapMutations(["setCurBook", "setCurNote"]),
    ...mapActions(["getNotebooks", "getNotes", "addNote"]),

    // 处理下拉框选中事件
    // notebookId 即 下拉框元素中的 Key
    handleCommand(notebookId) {
      if (notebookId == "trash") {
        return this.$router.push("/trash");
      }
      // 设置当前笔记id
      this.setCurBook({ curBookId: notebookId });
      // 根据当前笔记Id 获取笔记
      this.getNotes({ notebookId });
    },

    // 添加笔记
    onAddNote() {
      this.addNote({ notebookId: this.curBook.id });
    }
  }
};
</script>

<style lang="less">
@import url("../assets/css/note-sidebar.less");
</style>
