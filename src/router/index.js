import Vue from "vue";
import VueRouter from "vue-router";
import Outlet from "../views/Outlet.vue";
import Registrasi from "../views/Registrasi.vue";
import Success from "../views/Success.vue";

Vue.use(VueRouter);

const routes = [{
    path: "/outlet/:outlet_id/:txtKodeOutlet/:version",
    props: true,
    name: "Outlet",
    component: Outlet
  },
  {
    path: "/registrasi/:outlet_id",
    props: true,
    name: "Registrasi",
    component: Registrasi

  },
  {
    path: "/success",
    props: true,
    name: "Success",
    component: Success
  },

];

const router = new VueRouter({
  routes
});

export default router;