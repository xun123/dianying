import Vue from "vue";
import Router from "vue-router";
import movieRouter from "./movie";
import mineRouter from "./mine";
import cinameRouter from "./cinema";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    movieRouter,
    mineRouter,
    cinameRouter,
    // {
    //   // 根路径
    //   path:'/',
    //   component : () => import('@/views/movie')
    // },
    {
      // 路由重新定向
      path:'/*',
      redirect:'./movie'
    }
  ]
});
