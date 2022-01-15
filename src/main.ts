import { createApp } from 'vue';
import App from './App.vue';
import { store } from './vuex/store';
import './index.css';
import './icon';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

createApp(App)
  .component('font-awesome-icon', FontAwesomeIcon)
  .use(store)
  .mount('#app');
