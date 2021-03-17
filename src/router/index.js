import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    component: () => import("@/components/NotebookList")
  },
  {
    path: "/login",
    component: () => import("@/components/Login")
  },
  {
    path: "/note/:noteId",
    component: () => import("@/components/NoteDetail")
  },
  {
    path: "/trash/:noteId",
    component: () => import("@/components/TrashDetail")
  }
];

const router = new VueRouter({
  routes
});

export default router;
