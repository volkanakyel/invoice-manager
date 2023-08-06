import Router from "vue-router";
import HoweView from "../views/HomeView.vue";
import InvoiceId from "../views/InvoiceId.vue";
import ErrorPage from "../views/ErrorPage.vue";

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "Home",
      component: HoweView,
    },
    {
      path: "/:id",
      name: "Invoice",
      component: InvoiceId,
    },
    {
      path: "/error",
      name: "Error",
      component: ErrorPage,
    },
  ],
});
