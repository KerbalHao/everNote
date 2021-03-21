import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/notebook",
    component: () => import("@/components/NotebookList")
  },
  {
    path: "/login",
    component: () => import("@/components/Login")
  },
  {
    path: "/note",
    component: () => import("@/components/NoteDetail")
  },
  {
    path: "/trash",
    component: () => import("@/components/TrashDetail")
  }
];

const router = new VueRouter({
  routes
});

export default router;
