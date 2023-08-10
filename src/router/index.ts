import Router from "vue-router";
import HoweView from "../views/HomeView.vue";
import InvoiceId from "../views/InvoiceId.vue";
import ErrorPage from "../views/ErrorPage.vue";
import LoginPage from "../views/LoginPage.vue";
import RegisterPage from "../views/RegisterPage.vue";
import { firebaseAuth } from "../../firebase.js";

const router = new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "Home",
      component: HoweView,
      meta: { requiresAuth: true },
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

router.beforeEach((to, from, next) => {
  const requiresAuth = to.matched.some((record) => record.meta.requiresAuth);

  if (requiresAuth && !firebaseAuth.currentUser) {
    next("/login");
  } else {
    next();
  }
});

export default router;
