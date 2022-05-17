import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      alias: "/blogs",
      name: "blogs",
      component: () => import("./components/BlogsList")
    },
    {
      path: "/blogs/:id",
      name: "blog-details",
      component: () => import("./components/Blog")
    },
    {
      path: "/add",
      name: "add",
      component: () => import("./components/AddBlog")
    }
  ]
});
