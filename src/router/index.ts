import Router from "vue-router";
import HoweView from "../views/HomeView.vue";
import InvoiceId from "../views/InvoiceId.vue";

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "home",
      component: HoweView,
    },
    {
      path: "/:id",
      name: "Invoice",
      component: InvoiceId,
    },
  ],
});
