import Router from "vue-router";
import HoweView from "../views/HomeView.vue";
import InvoiceId from "../views/InvoiceId.vue";
import ErrorPage from "../views/ErrorPage.vue";
import LoginPage from "../views/LoginPage.vue";
import RegisterPage from "../views/RegisterPage.vue";

const router = new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "Home",
      component: HoweView,
    },
    {
      path: "/invoice/:id",
      name: "Invoice",
      component: InvoiceId,
    },
    {
      path: "/signup",
      name: "Signup",
      component: RegisterPage,
    },
    {
      path: "/login",
      name: "Login",
      component: LoginPage,
    },
    {
      path: "/error",
      name: "Error",
      component: ErrorPage,
    },
  ],
});

export default router;
