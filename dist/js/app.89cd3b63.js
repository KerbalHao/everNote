(function(t){function e(e){for(var n,r,a=e[0],c=e[1],u=e[2],d=0,h=[];d<a.length;d++)r=a[d],Object.prototype.hasOwnProperty.call(s,r)&&s[r]&&h.push(s[r][0]),s[r]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(t[n]=c[n]);l&&l(e);while(h.length)h.shift()();return i.push.apply(i,u||[]),o()}function o(){for(var t,e=0;e<i.length;e++){for(var o=i[e],n=!0,a=1;a<o.length;a++){var c=o[a];0!==s[c]&&(n=!1)}n&&(i.splice(e--,1),t=r(r.s=o[0]))}return t}var n={},s={app:0},i=[];function r(e){if(n[e])return n[e].exports;var o=n[e]={i:e,l:!1,exports:{}};return t[e].call(o.exports,o,o.exports,r),o.l=!0,o.exports}r.m=t,r.c=n,r.d=function(t,e,o){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(r.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)r.d(o,n,function(e){return t[e]}.bind(null,n));return o},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="";var a=window["webpackJsonp"]=window["webpackJsonp"]||[],c=a.push.bind(a);a.push=e,a=a.slice();for(var u=0;u<a.length;u++)e(a[u]);var l=c;i.push([0,"chunk-vendors"]),o()})({0:function(t,e,o){t.exports=o("56d7")},"0f9b":function(t,e,o){},2395:function(t,e,o){},"2acc":function(t,e,o){},"3bf7":function(t,e,o){},"3c95":function(t,e,o){"use strict";o("2acc")},"3cd3":function(t,e,o){"use strict";o("77fe")},"47dc":function(t,e,o){"use strict";o("0f9b")},"4caa":function(t,e,o){},"56d7":function(t,e,o){"use strict";o.r(e);o("e260"),o("e6cf"),o("cca6"),o("a79d");var n=o("2b0e"),s=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{attrs:{id:"app"}},[o("sidebar"),o("router-view")],1)},i=[],r=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{attrs:{id:"sidebar"}},[o("avatar"),o("div",{staticClass:"icons"},[o("router-link",{attrs:{to:"/note/1",title:"笔记"}},[o("i",{staticClass:"iconfont icon-note"})]),o("router-link",{attrs:{to:"/notebooks",title:"笔记本"}},[o("i",{staticClass:"iconfont icon-notebook"})]),o("router-link",{attrs:{to:"/trash/2",title:"回收站"}},[o("i",{staticClass:"iconfont icon-trash"})])],1),o("div",{staticClass:"logout",on:{click:t.onLogout}},[o("i",{staticClass:"iconfont icon-logout"})])],1)},a=[],c=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("span",{attrs:{title:t.username}},[t._v(t._s(t.slug))])},u=[],l=(o("d3b7"),o("bc3a")),d=o.n(l),h=o("5c96"),p=o.n(h),f="production";function v(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"GET",o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return new Promise((function(n,s){var i={url:t,method:e,validateStatus:function(t){return t>=200&&t<300||400===t}};"get"===e.toLowerCase()?i.params=o:i.data=o,d()(i).then((function(t){200===t.status?n(t.data):(console.log(123123),h["Message"].error(t.data.msg),s(t.data))})).catch((function(t){h["Message"].error(t.data.msg),alert({msg:"网络异常:"+t})}))}))}console.log(f),d.a.defaults.headers.post["Content-Type"]="application/x-www-form-urlencoded",d.a.defaults.baseURL="http//note-server.hunger-valley.com",d.a.defaults.withCredentials=!0,window.axios=d.a;var m=v,g={REGISTER:"auth/register",LOGIN:"auth/login",LOGOUT:"auth/logout",GET_INFO:"auth"},b={register:function(t){var e=t.username,o=t.password;return m(g.REGISTER,"post",{username:e,password:o})},login:function(t){var e=t.username,o=t.password;return m(g.LOGIN,"post",{username:e,password:o})},logout:function(){return m(g.LOGOUT)},getInfo:function(){return m(g.GET_INFO)}},w=new n["default"],k={data:function(){return{username:"未登录"}},created:function(){var t=this;w.$on("getInfo",(function(e){t.username=e})),b.getInfo().then((function(e){e.isLogin&&(t.username=e.data.username)}))},computed:{slug:function(){return this.username.charAt(0)}}},N=k,_=(o("3c95"),o("2877")),C=Object(_["a"])(N,c,u,!1,null,"cb5a3c3a",null),T=C.exports,y={components:{avatar:T},methods:{onLogout:function(){var t=this;b.logout().then((function(){console.log("注销成功"),t.$router.push("/")}))}}},O=y,x=(o("af64"),Object(_["a"])(O,r,a,!1,null,"0693f66d",null)),$=x.exports,E={name:"app",components:{sidebar:$}},j=E,I=(o("7c55"),Object(_["a"])(j,s,i,!1,null,null,null)),P=I.exports,L=o("8c4f"),S=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{attrs:{id:"login"}},[o("div",{staticClass:"modal-mask"},[o("div",{staticClass:"modal-wrapper"},[o("div",{staticClass:"modal-container"},[o("div",{staticClass:"main"}),o("div",{staticClass:"form"},[o("h3",{on:{click:t.showRegister}},[t._v("创建账户")]),o("transition",{attrs:{name:"slide",mode:"in-out"}},[o("div",{directives:[{name:"show",rawName:"v-show",value:t.isShowRegister,expression:"isShowRegister"}],staticClass:"register"},[o("input",{directives:[{name:"model",rawName:"v-model",value:t.register.username,expression:"register.username"}],attrs:{type:"text",placeholder:"用户名"},domProps:{value:t.register.username},on:{input:function(e){e.target.composing||t.$set(t.register,"username",e.target.value)}}}),o("input",{directives:[{name:"model",rawName:"v-model",value:t.register.password,expression:"register.password"}],attrs:{type:"password",placeholder:"密码"},domProps:{value:t.register.password},on:{input:function(e){e.target.composing||t.$set(t.register,"password",e.target.value)}}}),o("p",{class:{error:t.register.isError}},[t._v(" "+t._s(t.register.notice)+" ")]),o("div",{staticClass:"button",on:{click:t.onRegister}},[t._v("创建账号")])])]),o("h3",{on:{click:t.showLogin}},[t._v("登录")]),o("transition",{attrs:{name:"slide",mode:"in-out"}},[o("div",{directives:[{name:"show",rawName:"v-show",value:t.isShowLogin,expression:"isShowLogin"}],staticClass:"login"},[o("input",{directives:[{name:"model",rawName:"v-model",value:t.login.username,expression:"login.username"}],attrs:{type:"text",placeholder:"输入用户名"},domProps:{value:t.login.username},on:{input:function(e){e.target.composing||t.$set(t.login,"username",e.target.value)}}}),o("input",{directives:[{name:"model",rawName:"v-model",value:t.login.password,expression:"login.password"}],attrs:{type:"password",placeholder:"密码"},domProps:{value:t.login.password},on:{input:function(e){e.target.composing||t.$set(t.login,"password",e.target.value)}}}),o("p",{class:{error:t.login.isError}},[t._v(" "+t._s(t.login.notice)+" ")]),o("div",{staticClass:"button",on:{click:t.onLogin}},[t._v("登录")])])])],1)])])])])},B=[],A={name:"Login",data:function(){return{isShowLogin:!0,isShowRegister:!1,login:{username:"",password:"",notice:"请输入用户名和密码",isError:!1},register:{username:"",password:"",notice:"创建后请记住账号密码",isError:!1}}},beforeCreate:function(){var t=this;b.getInfo().then((function(e){e.isLogin&&t.$router.push("/notebooks")}))},methods:{showRegister:function(){this.isShowLogin=!1,this.isShowRegister=!0},showLogin:function(){this.isShowLogin=!0,this.isShowRegister=!1},onRegister:function(){var t=this,e=this.validUserName(this.register.username),o=e.isValid,n=e.notice,s=this.validPassword(this.register.password),i=s.isValid,r=s.notice;if(!o||!i)return this.register.isError=!0,void(this.register.notice=n||r);this.register.isError=!1,this.register.notice="",b.register({username:this.register.username,password:this.register.password}).then((function(){console.log("注册成功"),t.isShowLogin=!0,t.isShowRegister=!1}),(function(){console.log("注册失败")}))},onLogin:function(){var t=this,e=this.validUserName(this.login.username),o=e.isValid,n=e.notice,s=this.validPassword(this.login.password),i=s.isValid,r=s.notice;if(!o||!i)return this.login.isError=!0,void(this.login.notice=n||r);this.login.isError=!1,this.login.notice="",b.login({username:this.login.username,password:this.login.password}).then((function(){console.log("登陆成功"),w.$emit("getInfo",t.login.username),t.$router.push("/notebooks")}),(function(){console.log("登陆失败")}))},validUserName:function(t){var e=/^[\w\d_u4e00-\u9fa5]{3,15}$/.test(t);return{isValid:e,notice:e?"":"用户名必须是3~15个字符，仅限于字母数字下划线以及中文"}},validPassword:function(t){var e=/^.{6,16}$/.test(t);return{isValid:e,notice:e?"":"密码长度必须为6~16个字符"}}}},D=A,R=(o("7d57"),Object(_["a"])(D,S,B,!1,null,null,null)),M=R.exports,U=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"detail",attrs:{id:"notebook-list"}},[o("header",[o("a",{staticClass:"btn",attrs:{href:"#"},on:{click:function(e){return e.preventDefault(),t.onCreate(e)}}},[o("i",{staticClass:"iconfont icon-plus"}),t._v(" 新建笔记本")])]),o("main",[o("div",{staticClass:"layout"},[o("h3",[t._v("笔记本列表("+t._s(t.notebooks.length)+")")]),o("div",{staticClass:"book-list"},t._l(t.notebooks,(function(e){return o("router-link",{key:e.id,staticClass:"notebook",attrs:{to:"/note/1"}},[o("div",[o("span",{staticClass:"iconfont icon-notebook"}),t._v(" "+t._s(e.title)+" "),o("span",[t._v(t._s(e.noteCounts))]),o("span",{staticClass:"action",on:{click:function(o){return o.stopPropagation(),o.preventDefault(),t.onEdit(e)}}},[t._v("编辑")]),o("span",{staticClass:"action",on:{click:function(o){return o.stopPropagation(),o.preventDefault(),t.onDelete(e)}}},[t._v("删除")]),o("span",{staticClass:"date"},[t._v(t._s(e.friendlyCreatedAt))])])])})),1)])])])},G=[],q=(o("a434"),o("159b"),o("5319"),o("ac1f"),o("53ca"));function F(t){var e="object"===Object(q["a"])(t)?t:new Date(t),o=e.getTime(),n=Date.now(),s=n-o,i="";switch(!0){case s<6e4:i="刚刚";break;case s<36e5:i=Math.floor(s/6e4)+"分钟前";break;case s<864e5:i=Math.floor(s/36e5)+"小时前";break;default:i=Math.floor(s/864e5)+"天前"}return i}var V={GET:"/notebooks",ADD:"/notebooks",UPDATE:"/notebooks/:id",DELETE:"/notebooks/:id"},H={getAll:function(){return new Promise((function(t,e){m(V.GET).then((function(e){e.data=e.data.sort((function(){return-1})),e.data.forEach((function(t){t.friendlyCreatedAt=F(t.createdAt)})),t(e)})).catch((function(t){e(t)}))}))},updateNotebook:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{title:""},o=e.title,n=void 0===o?"":o;return m(V.UPDATE.replace(":id",t),"PATCH",{title:n})},deleteNotebook:function(t){return m(V.DELETE.replace(":id",t),"DELETE")},addNotebook:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{title:""},e=t.title,o=void 0===e?"":e;return m(V.ADD,"POST",{title:o})}},J={name:"Login",data:function(){return{notebooks:[]}},created:function(){var t=this;b.getInfo().then((function(e){e.isLogin||t.$router.push("/")})),H.getAll().then((function(e){t.notebooks=e.data}))},methods:{onCreate:function(){var t=this;this.$prompt("输入新笔记本标题","创建笔记本",{confirmButtonText:"确定",cancelButtonText:"取消",inputPattern:/^.{1,50}$/,inputErrorMessage:"标题不能为空，且不超过30个字符"}).then((function(t){var e=t.value;return H.addNotebook({title:e})})).then((function(e){e.data.friendlyCreatedAt=F(e.data.createdAt),t.notebooks.unshift(e.data),t.$message.success(e.msg)}))},onEdit:function(t){var e=this,o="";this.$prompt("输入新笔记本标题","修改笔记本",{confirmButtonText:"确定",cancelButtonText:"取消",inputPattern:/^.{1,30}$/,inputValue:t.title,inputErrorMessage:"标题不能为空，且不超过30个字符"}).then((function(e){var n=e.value;return o=n,H.updateNotebook(t.id,{title:o})})).then((function(n){t.title=o,e.$message.success(n.msg)}))},onDelete:function(t){var e=this;this.$confirm("确认要删除笔记本吗","删除笔记本",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){return H.deleteNotebook(t.id)})).then((function(o){e.notebooks.splice(e.notebooks.indexOf(t),1),e.$message.success(o.msg)}))}}},z=J,K=(o("e1e2"),Object(_["a"])(z,U,G,!1,null,"7130cb0d",null)),Q=K.exports,W=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"detail",attrs:{id:"note"}},[o("note-sidebar",{on:{"update:notes":function(e){return t.notes=e}}}),o("div",{staticClass:"note-detail"},[o("div",{directives:[{name:"show",rawName:"v-show",value:!t.curBook.id,expression:"!curBook.id"}],staticClass:"note-empty"},[t._v("请创建笔记本后")]),o("div",{directives:[{name:"show",rawName:"v-show",value:!t.curNote.id,expression:"!curNote.id"}],staticClass:"note-empty"},[t._v("选择或创建笔记")]),o("div",{directives:[{name:"show",rawName:"v-show",value:t.curNote.id,expression:"curNote.id"}],staticClass:"note-detail-ct"},[o("div",{staticClass:"note-bar"},[o("span",[t._v(" 创建日期: "+t._s(t.curNote.createdAtFriendly))]),o("span",[t._v(" 更新日期: "+t._s(t.curNote.updatedAtFriendly))]),o("span",[t._v(" "+t._s(t.statusText))]),o("span",{staticClass:"iconfont icon-delete",on:{click:t.onDeleteNote}}),o("span",{staticClass:"iconfont",class:t.isShowPreview?"icon-edit":"icon-eye",on:{click:function(e){t.isShowPreview=!t.isShowPreview}}})]),o("div",{staticClass:"note-title"},[o("input",{directives:[{name:"model",rawName:"v-model",value:t.curNote.title,expression:"curNote.title"}],attrs:{type:"text",placeholder:"输入标题"},domProps:{value:t.curNote.title},on:{input:[function(e){e.target.composing||t.$set(t.curNote,"title",e.target.value)},t.onUpdateNote],keydown:function(e){t.statusText="正在输入..."}}})]),o("div",{staticClass:"editor"},[o("codemirror",{directives:[{name:"show",rawName:"v-show",value:!t.isShowPreview,expression:"!isShowPreview"}],attrs:{options:t.cmOptions},on:{input:t.onUpdateNote,inputRead:function(e){t.statusText="正在输入..."}},model:{value:t.curNote.content,callback:function(e){t.$set(t.curNote,"content",e)},expression:"curNote.content"}}),o("div",{directives:[{name:"show",rawName:"v-show",value:t.isShowPreview,expression:"isShowPreview"}],staticClass:"preview markdown-body",domProps:{innerHTML:t._s(t.previewContent)}})],1)])])],1)},X=[],Y=o("5530"),Z=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"note-sidebar"},[t.curBook.id?o("span",{staticClass:"btn add-note",on:{click:t.onAddNote}},[t._v("添加笔记")]):t._e(),t.curBook.id?t._e():o("span",{staticClass:"notebook-title"},[t._v("无笔记本")]),t.curBook.id?o("el-dropdown",{staticClass:"notebook-title",attrs:{placement:"bottom"},on:{command:t.handleCommand}},[o("span",{staticClass:"el-dropdown-link"},[t._v(" "+t._s(t.curBook.title)+" "),o("i",{staticClass:"iconfont icon-down"})]),o("el-dropdown-menu",{attrs:{slot:"dropdown"},slot:"dropdown"},[t._l(t.notebooks,(function(e){return o("el-dropdown-item",{key:e.id,attrs:{command:e.id}},[t._v(t._s(e.title))])})),o("el-dropdown-item",{attrs:{command:"trash"}},[t._v("回收站")])],2)],1):t._e(),t._m(0),o("ul",{staticClass:"notes"},t._l(t.notes,(function(e){return o("li",{key:e.id},[o("router-link",{attrs:{to:"/note?noteId="+e.id+"&notebookId="+t.curBook.id}},[o("span",{staticClass:"date"},[t._v(t._s(e.updatedAtFriendly))]),o("span",{staticClass:"title"},[t._v(t._s(e.title))])])],1)})),0)],1)},tt=[function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"menu"},[o("div",[t._v("更新时间")]),o("div",[t._v("标题")])])}],et=o("2f62"),ot={created:function(){var t=this;this.getNotebooks().then((function(){if(t.setCurBook({curBookId:t.$route.query.notebookId}),t.curBook.id)return t.getNotes({notebookId:t.curBook.id})})).then((function(){t.setCurNote({curNoteId:t.$route.query.noteId}),t.$router.replace({path:"/note",query:{noteId:t.curNote.id,notebookId:t.curBook.id}})}))},data:function(){return{}},computed:Object(Y["a"])({},Object(et["c"])(["notebooks","notes","curBook","curNote"])),methods:Object(Y["a"])(Object(Y["a"])(Object(Y["a"])({},Object(et["d"])(["setCurBook","setCurNote"])),Object(et["b"])(["getNotebooks","getNotes","addNote"])),{},{handleCommand:function(t){var e=this;if("trash"==t)return this.$router.push({path:"/trash"});this.$store.commit("setCurBook",{curBookId:t}),this.getNotes({notebookId:t}).then((function(){e.setCurNote(),e.$router.replace({path:"/note",query:{noteId:e.curNote.id,notebookId:e.curBook.id}})}))},onAddNote:function(){this.addNote({notebookId:this.curBook.id})}})},nt=ot,st=(o("3cd3"),Object(_["a"])(nt,Z,tt,!1,null,null,null)),it=st.exports,rt=o("2ef0"),at=o.n(rt),ct=o("d4cd"),ut=o.n(ct),lt=o("8f94"),dt=(o("a7be"),o("959b"),o("bbca"),new ut.a),ht={components:{NoteSidebar:it,codemirror:lt["codemirror"]},data:function(){return{statusText:"笔记未改动",isShowPreview:!1,cmOptions:{tabSize:4,mode:"text/x-markdown",theme:"neat",lineNumbers:!1,line:!0}}},created:function(){this.checkLogin({path:"/login"})},computed:Object(Y["a"])(Object(Y["a"])({},Object(et["c"])(["notes","curNote","curBook"])),{},{previewContent:function(){return dt.render(this.curNote.content||"")}}),methods:Object(Y["a"])(Object(Y["a"])(Object(Y["a"])({},Object(et["d"])(["setCurNote"])),Object(et["b"])(["updateNote","deleteNote","checkLogin"])),{},{onUpdateNote:at.a.debounce((function(){var t=this;this.curNote.id&&this.updateNote({noteId:this.curNote.id,title:this.curNote.title,content:this.curNote.content}).then((function(){t.statusText="已保存"})).catch((function(){t.statusText="保存出错"}))}),3e3),onDeleteNote:function(){var t=this;this.deleteNote({noteId:this.curNote.id}).then((function(){t.$router.replace({path:"/note"})}))}}),beforeRouteUpdate:function(t,e,o){this.setCurNote({curNoteId:t.query.noteId}),o()}},pt=ht,ft=(o("8353"),Object(_["a"])(pt,W,X,!1,null,null,null)),vt=ft.exports,mt=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"detail",attrs:{id:"trash"}},[o("div",{staticClass:"note-sidebar"},[o("h3",{staticClass:"notebook-title"},[t._v("回收站")]),t._m(0),o("ul",{staticClass:"notes"},t._l(t.trashNotes,(function(e){return o("li",{key:e.id},[o("router-link",{attrs:{to:"/trash?noteId="+e.id}},[o("span",{staticClass:"date"},[t._v(t._s(e.updatedAtFriendly))]),o("span",{staticClass:"title"},[t._v(t._s(e.title))])])],1)})),0)]),o("div",{staticClass:"note-detail"},[o("div",{staticClass:"note-bar"},[o("span",[t._v(" 创建日期: "+t._s(t.curTrashNote.createdAtFriendly))]),o("span",[t._v(" | ")]),o("span",[t._v(" 更新日期: "+t._s(t.curTrashNote.updatedAtFriendly))]),o("span",[t._v(" | ")]),o("span",[t._v(" 所属笔记本: "+t._s(t.belongTo))]),o("a",{staticClass:"btn action",on:{click:t.onRevert}},[t._v("恢复")]),o("a",{staticClass:"btn action",on:{click:t.onDelete}},[t._v("彻底删除")])]),o("div",{staticClass:"note-title"},[o("span",[t._v(t._s(t.curTrashNote.title))])]),o("div",{staticClass:"editor"},[o("div",{staticClass:"preview markdown-body",domProps:{innerHTML:t._s(t.compiledMarkdown)}})])])])},gt=[function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"menu"},[o("div",[t._v("更新时间")]),o("div",[t._v("标题")])])}],bt=new ut.a,wt={data:function(){return{}},created:function(){var t=this;this.checkLogin({path:"/login"}),this.getNotebooks(),this.getTrashNotes().then((function(){t.setCurTrashNote({curTrashNoteId:t.$route.query.noteId}),t.$router.replace({path:"/trash",query:{noteId:t.curTrashNote.id}})}))},computed:Object(Y["a"])(Object(Y["a"])({},Object(et["c"])(["trashNotes","curTrashNote","belongTo"])),{},{compiledMarkdown:function(){return bt.render(this.curTrashNote.content||"")}}),methods:Object(Y["a"])(Object(Y["a"])(Object(Y["a"])({},Object(et["d"])(["setCurTrashNote"])),Object(et["b"])(["checkLogin","deleteTrashNote","revertTrashNote","getTrashNotes","getNotebooks"])),{},{onDelete:function(){var t=this;this.$confirm("删除后将无法恢复","确定删除？",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){return t.deleteTrashNote({noteId:t.curTrashNote.id})})).then((function(){console.log("delete success"),t.setCurTrashNote(),t.$router.replace({path:"/trash",query:{noteId:t.curTrashNote.id}})}))},onRevert:function(){var t=this;this.revertTrashNote({noteId:this.curTrashNote.id}).then((function(){t.setCurTrashNote(),t.$router.replace({path:"/trash",query:{noteId:t.curTrashNote.id}})}))}}),beforeRouteUpdate:function(t,e,o){this.setCurTrashNote({curTrashNoteId:t.query.noteId}),o()}},kt=wt,Nt=(o("47dc"),Object(_["a"])(kt,mt,gt,!1,null,null,null)),_t=Nt.exports;n["default"].use(L["a"]);var Ct=[{path:"/",name:"Login",component:M},{path:"/notebooks",component:Q},{path:"/note/:noteId",component:vt},{path:"/trash/:noteId",component:_t}],Tt=new L["a"]({routes:Ct}),yt=Tt;n["default"].use(et["a"]);var Ot=new et["a"].Store({state:{},mutations:{},actions:{},modules:{}});o("0fae");n["default"].config.productionTip=!1,n["default"].use(p.a),new n["default"]({router:yt,store:Ot,render:function(t){return t(P)}}).$mount("#app")},"58fe":function(t,e,o){},"77fe":function(t,e,o){},"7c55":function(t,e,o){"use strict";o("2395")},"7d57":function(t,e,o){"use strict";o("58fe")},8353:function(t,e,o){"use strict";o("3bf7")},af64:function(t,e,o){"use strict";o("4caa")},cfc9:function(t,e,o){},e1e2:function(t,e,o){"use strict";o("cfc9")}});
//# sourceMappingURL=app.89cd3b63.js.map