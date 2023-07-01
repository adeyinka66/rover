import { createRouter, createWebHistory } from "vue-router";

import biography from "../views/biography.vue";
import contact from "../views/contact.vue";
import landing from "../views/landing.vue";
import story from "../views/story.vue";
import lost from "../views/lost.vue";

const routes = [
  { path: "/", name: "landing", component: landing },
  { path: "/biography", name: "biography", component: biography },
  { path: "/contact", name: "contact", component: contact },
  { path: "/story", name: "story", component: story },
  { path: "/:catchAll(.*)", name: "lost", component: lost },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
