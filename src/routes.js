import AppView from './components/App.vue'
import NotFoundView from './components/404.vue'

// Routes
const routes = [
    {
      path: '/',
      component: NotFoundView
    },    
    {
      // not found handler
      path: '*',
      component: NotFoundView
    }
  ]
  
  export default routes