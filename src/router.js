import LoginPage from './components/LoginPage'
import App from './App.vue'
import Alert from './components/Alert'
import Vue from 'vue';
import VueRouter from 'vue-router';


// Register Vue Router
Vue.use(VueRouter);


// Define your routes
const routes = [
    {
      path: '/',
      component: LoginPage,
    },
    {
      path: '/alert',
      component: Alert,
    },
  ];
  
  // Create the router instance
  const router = new VueRouter({
    mode: 'history', // Use 'history' mode for clean URLs (requires server configuration)
    routes,
  });
  
  export default router;
