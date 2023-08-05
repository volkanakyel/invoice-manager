import Router from "vue-router";
import HoweView from "../views/HomeView.vue";

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "home",
      component: HoweView,
    },
    // {
    //   path: "/firstroute/:name",
    //   name: "FirstRoute",
    //   component: FirstRoute,
    // },
  ],
});
