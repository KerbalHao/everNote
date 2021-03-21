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
import Auth from "@/apis/auth";
import Notebooks from "@/apis/notebooks";
import { friendlyDate } from "@/helpers/util";

//window.Notebooks = Notebooks

export default {
  data() {
    return {
      notebooks: []
    };
  },

  created() {
    // 校验登录状态
    // 未登录直接跳转登陆界面
    Auth.getInfo().then((res) => {
      if (!res.isLogin) {
        return this.$router.push({ path: "/login" });
      }
    });
    // 已登陆则获取笔记本列表
    Notebooks.getAll().then((res) => {
      this.notebooks = res.data;
    });
  },

  methods: {
    // 创建笔记本
    onCreate() {
      this.$prompt("输入新笔记本标题", "创建笔记本", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        inputPattern: /^.{1,30}$/,
        inputErrorMessage: "标题不能为空，且不超过30个字符"
      })
        .then(({ value }) => {
          // 将调用创建笔记本的结果返回出去
          return Notebooks.addNotebook({ title: value });
        })
        .then((res) => {
          // 处理本地数据，避免再次请求接口
          res.data.friendlyCreatedAt = friendlyDate(res.data.createdAt);
          this.notebooks.unshift(res.data);
          this.$message.success(res.msg);
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
      })
        .then(({ value }) => {
          // 缓存弹出窗输入的值，并将更新的返回值返回出去
          title = value;
          return Notebooks.updateNotebook(notebook.id, { title });
        })
        .then((res) => {
          // 处理本地数据
          notebook.title = title;
          this.$message.success(res.msg);
        });
    },

    // 删除笔记本
    onDelete(notebook) {
      this.$confirm("确认要删除笔记本吗", "删除笔记本", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
          // 返回删除接口的返回值
          return Notebooks.deleteNotebook(notebook.id);
        })
        .then((res) => {
          // 处理本地数据
          this.notebooks.splice(this.notebooks.indexOf(notebook), 1);
          this.$message.success(res.msg);
        });
    }
  }
};
</script>

<style lang="less" scoped>
@import url(../assets/css/notebook-list.less);
</style>
