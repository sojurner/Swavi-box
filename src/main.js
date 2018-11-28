import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App.vue';
import films from './components/Films';
import ContentController from './components/ContentController/';

Vue.use(VueRouter);
Vue.config.productionTip = false;

const routes = [
  {
    component: films,
    name: 'films',
    path: '/films'
  },
  {
    component: ContentController,
    name: 'ContentController',
    path: '/people'
    // children: [{ path: '', component: CharacterDetails }]
  },
  {
    component: ContentController,
    name: 'ContentController',

    path: '/vehicles'
    // children: [{ path: '', component: VehicleDetails }]
  },
  {
    component: ContentController,
    name: 'ContentController',
    path: '/planets'
    // children: [{ path: '', component: PlanetDetails }]
  },
  {
    component: ContentController,
    name: 'ContentController',
    path: '/starships'
    // children: [{ path: '', component: StarshipDetails }]
  },
  {
    component: ContentController,
    name: 'ContentController',
    path: '/species'
    // children: [{ path: '', SpeciesDetails }]
  }
];

const router = new VueRouter({
  // mode: 'history',
  base: __dirname,
  routes
});

new Vue({
  router,
  render: h => h(App)
}).$mount('#app');
