<template>
  <div id="note">
    <!-- 获取所有笔记 -->
    <NoteSidebar
      @update:notes="(val) => (notes = val)"
      :curNote="curNote"
    ></NoteSidebar>
    <div class="note-detail">
      <div class="note-empty" v-show="!curBook.id">请创建笔记本后</div>
      <div class="note-empty" v-show="!curNote.id">选择或创建笔记</div>
      <div class="note-detail-ct" v-show="curNote.id">
        <div class="note-bar">
          <span> 创建日期: {{ curNote.createdAtFriendly }}</span>
          <span> 更新日期: {{ curNote.updatedAtFriendly }}</span>
          <span> {{ statusText }}</span>
          <span class="iconfont icon-delete" @click="onDeleteNote"></span>
          <span
            class="iconfont icon-fullscreen"
            @click="isShowPreview = !isShowPreview"
          ></span>
        </div>
        <div class="note-title">
          <input
            type="text"
            v-model="curNote.title"
            @input="onUpdateNote"
            @keydown="statusText = '正在输入...'"
            placeholder="输入标题"
          />
        </div>
        <div class="editor">
          <codemirror
            v-model="curNote.content"
            :options="cmOptions"
            v-show="!isShowPreview"
            @input="ononUpdateNote"
            @inputRead="statusText = '正在输入...'"
          ></codemirror>
          <!-- <textarea
            v-show="isShowPreview"
            v-model="curNote.content"
            @input="onUpdateNote"
            @keydown="statusText = '正在输入...'"
            placeholder="输入内容, 支持 markdown 语法"
          ></textarea> -->
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
import NoteSidebar from "./NoteSidebar";
import _ from "lodash";
import MarkdownIt from "markdown-it";
import { mapGetters, mapMutations, mapActions } from "vuex";
import { codemirror } from "vue-codemirror";
import "codemirror/lib/codemirror.css";
import "codemirror/mode/markdown/markdown.js";
import "codemirror/theme/neat.css";

let md = new MarkdownIt();

export default {
  name: "NoteDetail",
  components: { NoteSidebar, codemirror },
  data() {
    return {
      isShowPreview: false,
      statusText: "笔记未改动",
      cmOptions: {
        tabSize: 4,
        mode: "text/x-markdown",
        theme: "neat",
        lineNumbers: false,
        line: true
      }
    };
  },
  computed: {
    ...mapGetters(["notes", "curNote", "curBook"]),

    // 设置 md 预览内容
    // md.render 返回 md 解析的 html 格式字符串
    previewContent() {
      return md.render(this.curNote.content || "");
    }
  },

  created() {
    this.checkLogin({ path: "/login" });
  },

  // 路由有变化时设置当前笔记的ID
  beforeRouteUpdate(to, next) {
    this.setCurNote({ curNoteId: to.query.noteId });
    next();
  },

  methods: {
    ...mapMutations(["setCurNote"]),

    ...mapActions(["updateNote", "deleteNote", "checkLogin"]),

    // 更新笔记
    // 用防抖函数包装，停止输入时自动调用更新接口
    onUpdateNote: _.debounce(function() {
      this.updateNote({
        noteId: this.curNote.id,
        title: this.curNote.title,
        content: this.curNote.content
      })
        .then(() => {
          this.statusText = "已保存";
        })
        .catch(() => {
          this.statusText = "保存出错";
        });
    }, 300),

    // 删除笔记
    onDeleteNote() {
      this.deleteNote({ noteId: this.curNote.id }).then(() => {
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
