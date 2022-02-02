import App from './App.vue';
import { createApp } from 'vue';
import { store } from './vuex/store';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import './index.css';
import './icon';

createApp(App)
  .component('font-awesome-icon', FontAwesomeIcon)
  .use(store)
  .mount('#app');
