import Vue from 'vue';
import Router from 'vue-router';

// 글 작성 컴포넌트
import Writing from '@/components/diary/writing';
// 설정 컴포넌트
import Settings from '@/components/diary/settings';
import Font from '@/components/diary/settings/font';
import Date from '@/components/diary/settings/date';
import Clock from '@/components/diary/settings/clock';
import Capture from '@/components/diary/settings/capture';
import PushMessage from '@/components/diary/settings/pushMessage';

// Webpack CSS import
import Vuetify from 'vuetify';
import 'vuetify/dist/vuetify.min.css';

// JS import
Vue.use(Vuetify);
Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/writing',
      name: 'writing',
      component: Writing,
    },
    {
      path: '/settings',
      name: 'settings',
      component: Settings,
    },

    {
      path: '/settings/font',
      name: 'font',
      component: Font,
    },

    {
      path: '/settings/date',
      name: 'date',
      component: Date,
    },

    {
      path: '/settings/clock',
      name: 'clock',
      component: Clock,
    },

    {
      path: '/settings/capture',
      name: 'capture',
      component: Capture,
    },

    {
      path: '/settings/pushmessage',
      name: 'pushMessage',
      component: PushMessage,
    },
  ],
  mode: 'history',
});