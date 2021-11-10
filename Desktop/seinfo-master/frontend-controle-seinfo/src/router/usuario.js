import Vue from "vue";
import Router from "vue-router";
import listInscricoes from "@/components/list_inscricoes";
import Usuario from "@/components/usuario";
import atvHome from "@/components/atv_usuario";
import UsuPerfil from "@/components/perfil_usuario";
import homeUsu from "@/components/home_usuario";
import ConfirmaPresenca from "@/components/ConfirmaPresenca"

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/usuario",
      name: "Usuario",
      component: Usuario,
      children: [
        {
          path: "",
          component: homeUsu,
        },
        {
          path: "atvHome/:idEvento/:CPF/:idAgenda",
          component: atvHome,
        },
        {
          path: "listInsc",
          component: listInscricoes,
        },
        {
          path: "perfilUsu",
          component: UsuPerfil,
        },
      ],
    },
    {
      path: "*",
      name: "e404",
      component: Usuario,
    },
    {
      path: "/presenca/:idAgenda/:idEvento/:idAtividade",
      name: "PresencaEvento",
      component: ConfirmaPresenca,
    },
  ],
});
