import { createApp } from 'vue'
import { createRouter, createWebHashHistory } from 'vue-router';
import App from './App.vue'
import HomeComponent from './components/HomeComponent.vue';
import AuthorsComponent from './components/AuthorsComponent.vue';
import StateManagementComponent from './components/StateManagement.vue';

const routes = [
  { path: '/', component: HomeComponent },
  { path: '/authors', component: AuthorsComponent },
  { path: '/state_mgmt', component: StateManagementComponent },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes: routes
});

const app = createApp(App);
app.use(router);
app.mount('#app');
