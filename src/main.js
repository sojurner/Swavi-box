import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App.vue';
import films from './components/Films';
import ContentType from './components/ContentType/ContentType.vue';

Vue.use(VueRouter);
Vue.config.productionTip = false;

const routes = [
  {
    component: films,
    name: 'films',
    path: '/films'
  },
  {
    component: ContentType,
    name: 'content',
    path: '/people'
    // children: [{ path: '', component: CharacterDetails }]
  },
  {
    component: ContentType,
    name: 'content',

    path: '/vehicles'
    // children: [{ path: '', component: VehicleDetails }]
  },
  {
    component: ContentType,
    name: 'content',
    path: '/planets'
    // children: [{ path: '', component: PlanetDetails }]
  },
  {
    component: ContentType,
    name: 'content',
    path: '/starships'
    // children: [{ path: '', component: StarshipDetails }]
  },
  {
    component: ContentType,
    name: 'content',
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
