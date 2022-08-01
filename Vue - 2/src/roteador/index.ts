import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
import Tarefas from "../views/Tarefas.vue";
// tipo routeRecordRaw[]
const rotas: RouteRecordRaw[] = [
  {
    path: "/",
    name: "Tarefas",
    component: Tarefas,
  },
];

// config vue router
const roteador = createRouter({
  history: createWebHashHistory(),
  routes: rotas,
});

export default roteador;
