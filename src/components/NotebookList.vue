<template>
  <div class="detail" id="notebook-list">
    <header>
      <a href="#" class="btn" @click.prevent="onCreate"
        ><i class="iconfont icon-plus"></i> 新建笔记本
      </a>
    </header>
    <main>
      <div class="layout">
        <h3>笔记本列表({{ notebooks.length }})</h3>
        <div class="book-list">
          <router-link
            v-for="notebook in notebooks"
            :to="`/note?notebookId=${notebook.id}`"
            class="notebook"
            :key="notebook.id"
          >
            <div>
              <span class="iconfont icon-notebook"></span> {{ notebook.title }}
              <span>{{ notebook.noteCounts }}</span>
              <span class="action" @click.stop.prevent="onEdit(notebook)"
                >编辑</span
              >
              <span class="action" @click.stop.prevent="onDelete(notebook)"
                >删除</span
              >
              <span class="date">{{ notebook.friendlyCreatedAt }}</span>
            </div>
          </router-link>
        </div>
      </div>
    </main>
  </div>
</template>
<script>
import { mapActions, mapGetters } from "vuex";


export default {
  data() {
    return {
      // notebooks: []
    };
  },
  computed: {
    ...mapGetters(["notebooks"])
  },
  created() {
    // 校验登录状态
    // 未登录直接跳转登陆界面
     this.checkLogin({ path: '/login' })
    // 已登陆则获取笔记本列表
    this.getNotebooks();
  },

  methods: {
    ...mapActions([
      "getNotebooks",
      "addNotebook",
      "updateNotebook",
      "deleteNotebook",
      'checkLogin'
    ]),
    // 创建笔记本
    onCreate() {
      this.$prompt("输入新笔记本标题", "创建笔记本", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        inputPattern: /^.{1,30}$/,
        inputErrorMessage: "标题不能为空，且不超过30个字符"
      }).then(({ value }) => {
        // 处理添加笔记本事件
        return this.addNotebook({ title: value });
      });
    },

    // 编辑笔记本
    onEdit(notebook) {
      let title = "";
      this.$prompt("输入新笔记本标题", "修改笔记本", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        inputPattern: /^.{1,30}$/,
        inputValue: notebook.title,
        inputErrorMessage: "标题不能为空，且不超过30个字符"
      }).then(({ value }) => {
        // 处理编辑笔记本事件
        title = value;
        this.updateNotebook({ notebookId: notebook.id, title });
      });
    },

    // 删除笔记本
    onDelete(notebook) {
      this.$confirm("确认要删除笔记本吗", "删除笔记本", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      }).then(() => {
        // 处理删除笔记本事件
        this.deleteNotebook({notebookId:notebook.id});
      });
    }
  }
};
</script>

<style lang="less" scoped>
@import url(../assets/css/notebook-list.less);
</style>
