<!--
 * @Date: 2021-03-20 20:33:24
 * @LastEditors: KerbalHao
 * @FilePath: \ever-note\src\components\NoteSidebar.vue
-->
<template>
  <div class="note-sidebar">
    <span class="btn add-note" @click="addNote">添加笔记</span>
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
import Notebooks from "@/apis/notebooks";
import Notes from "@/apis/notes";
import Bus from "@/helpers/bus";

export default {
  props: ["curNote"],
  data() {
    return {
      notebooks: [],
      notes: [],
      curBook: {}
    };
  },
  created() {
    // 进入获取当前所有笔记本
    Notebooks.getAll()
      .then((res) => {
        this.notebooks = res.data;
        // 设置当前笔记本
        // 根据query 来判断进入笔记的方式，若有 notebook.id 则是点击具体笔记本进入
        // 若无则默认显示第一个，若无笔记本则显示空
        this.curBook = this.notebooks.find(
          (notebook) =>
            notebook.id == this.$route.query.notebookId ||
            this.notebooks[0] ||
            {}
        );
        // 确定当前笔记本（curBook）后请求其中的笔记
        return Notes.getAll({ notebookId: this.curBook.id });
      })
      .then((res) => {
        this.notes = res.data;
        this.$emit("update:notes", this.notes);
        Bus.$emit("update:notes", this.notes);
      });
  },
  methods: {
    // 处理下拉框选中事件
    // notebookId 即 下拉框元素中的 Key
    handleCommand(notebookId) {
      if (notebookId == "trash") {
        return this.$router.push("/trash");
      }
      this.curBook = this.notebooks.find(
        (notebook) => notebook.id === notebookId
      );

      // 根据选中的笔记本id 请求笔记接口
      Notes.getAll({ notebookId }).then((res) => {
        this.notes = res.data;
        this.$emit("update:notes", this.notes);
      });
    },

    // 添加笔记
    addNote() {
      Notes.addNote({ notebookId: this.curBook.id }).then((res) => {
        console.log(res);
        this.notes.unshift(res.data);
      });
    }
  }
};
</script>

<style lang="less">
@import url("../assets/css/note-sidebar.less");
</style>
