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
    name: 'contentType',
    path: '/people'
    // children: [{ path: '', component: CharacterDetails }]
  },
  {
    component: ContentType,
    name: 'contentType',

    path: '/vehicles'
    // children: [{ path: '', component: VehicleDetails }]
  },
  {
    component: ContentType,
    name: 'contentType',
    path: '/planets'
    // children: [{ path: '', component: PlanetDetails }]
  },
  {
    component: ContentType,
    name: 'contentType',
    path: '/starships'
    // children: [{ path: '', component: StarshipDetails }]
  },
  {
    component: ContentType,
    name: 'contentType',
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
