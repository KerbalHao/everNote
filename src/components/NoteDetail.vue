<template>
  <div id="note">
    <!-- 获取所有笔记 -->
    <NoteSidebar @update:notes="(val) => (notes = val)" :curNote='curNote'></NoteSidebar>
    <div class="note-detail">
      <div class="note-empty" v-show="!curNote.id">请选择笔记</div>
      <div class="note-detail-ct" v-show="curNote.id">
        <div class="note-bar">
          <span> 创建日期: {{ curNote.createdAtFriendly }}</span>
          <span> 更新日期: {{ curNote.updatedAtFriendly }}</span>
          <span> {{ statusText }}</span>
          <span class="iconfont icon-delete" @click="deleteNote"></span>
          <span
            class="iconfont icon-fullscreen"
            @click="isShowPreview = !isShowPreview"
          ></span>
        </div>
        <div class="note-title">
          <input
            type="text"
            v-model="curNote.title"
            @input="updateNote"
            @keydown="statusText = '正在输入...'"
            placeholder="输入标题"
          />
        </div>
        <div class="editor">
          <!-- <codemirror
            v-model="curNote.content"
            :options="cmOptions"
            v-show="!isShowPreview"
            @input="onUpdateNote"
            @inputRead="statusText = '正在输入...'"
          ></codemirror> -->
          <textarea
            v-show="isShowPreview"
            v-model="curNote.content"
            @input="updateNote"
            @keydown="statusText = '正在输入...'"
            placeholder="输入内容, 支持 markdown 语法"
          ></textarea>
          <div
            class="preview markdown-body"
            v-html="previewContent"
            v-show="!isShowPreview"
          ></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Auth from "@/apis/auth";
import NoteSidebar from "./NoteSidebar";
import Bus from "@/helpers/bus";
import _ from "lodash";
import Notes from "@/apis/notes";
import MarkdownIt from "markdown-it";
let md = new MarkdownIt();

export default {
  name:'NoteDetail',
  components: { NoteSidebar },
  data() {
    return {
      curNote: {},
      notes: [],
      isShowPreview: false,
      statusText: "笔记未改动"
    };
  },
  computed: {
    // 设置 md 预览内容
    // md.render 返回 md 解析的 html 格式字符串
    previewContent() {
      return md.render(this.curNote.content || "");
    }
  },

  created() {
    // 判断登陆状态
    Auth.getInfo().then((res) => {
      if (!res.isLogin) {
        this.$router.push({ path: "/login" });
      }
    });

    // 订阅事件，更新当前选中笔记
    // 用于处理刚进入 NoteDetail 组件中，beforeRouteUpdate 未生效无法获取 curNote 问题
    Bus.$on(
      "update:notes",
      (val) =>
        (this.curNote =
          val.find((note) => note.id == this.$route.query.id) || val[0] ||  {})
    );
  },
  beforeRouteUpdate(to) {
    this.curNote = this.notes.find((note) => note.id == to.query.noteId);
  },
  methods: {
    // 更新笔记
    // 用防抖函数包装，停止输入时自动调用更新接口
    updateNote: _.debounce(function() {
      Notes.updateNote(
        { noteId: this.curNote.id },
        { title: this.curNote.title, content: this.curNote.content }
      )
        .then(() => {
          this.statusText = "已保存";
        })
        .catch(() => {
          this.statusText = "保存出错";
        });
    }, 300),

    // 删除笔记
    deleteNote() {
      Notes.deleteNote({ noteId: this.curNote.id }).then((data) => {
        this.$message.success(data.msg);
        this.notes.splice(this.notes.indexOf(this.curNote), 1);
        this.$router.replace({ path: "/note" });
      });
    }
  }
};
</script>

<style scoped lang="less">
@import url(../assets/css/note-detail.less);
#note {
  display: flex;
  align-items: stretch;
  background: #fff;
  flex: 1;
}
</style>
