import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App.vue';
import Characters from './components/ContentType/Characters.vue';
import Planets from './components/ContentType/Planets.vue';
import Vehicles from './components/ContentType/Vehicles.vue';
import Starships from './components/ContentType/Starships.vue';
import Films from './components/ContentType/Films.vue';
import Species from './components/ContentType/Species.vue';

Vue.use(VueRouter);
Vue.config.productionTip = false;

const routes = [
  {
    component: Films,
    name: 'films',
    path: '/films'
    // children: [
    //   {
    //     path: '',
    //     component: FilmDetails
    //   }
    // ]
  },
  {
    component: Characters,
    name: 'characters',
    path: '/people'
    // children: [{ path: '', component: CharacterDetails }]
  },
  {
    component: Vehicles,
    name: 'vehicles',
    path: '/vehicles'
    // children: [{ path: '', component: VehicleDetails }]
  },
  {
    component: Planets,
    path: '/planets'
    // children: [{ path: '', component: PlanetDetails }]
  },
  {
    component: Starships,
    path: '/starships'
    // children: [{ path: '', component: StarshipDetails }]
  },
  {
    component: Species,
    path: '/species'
    // children: [{ path: '', SpeciesDetails }]
  }
];

const router = new VueRouter({
  mode: 'history',
  base: __dirname,
  routes
});

new Vue({
  router,
  render: h => h(App)
}).$mount('#app');
