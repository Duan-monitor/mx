import Vue from 'vue';
import Router from 'vue-router';
import HomePage from '@/components/Login';
import List from '@/components/List';
import Detail from '@/components/Detail';
import store from '@/store';
Vue.use(Router);
import Query from '@/components/ShowList/List_con';
import ShowList from '@/components/ShowList/ShowList';
import MailList from '@/components/MailList/MailList';
import MailTotal from '@/components/MailList/Total/MailTotal';
import MailBranch from '@/components/MailList/Branch/MailBranch';

const router = new Router({
  routes: [
    {
      path: '/',
      redirect: 'homePage',
    }, {
      path: '/homePage',       //默认总页面
      name: 'HomePage',
      component: HomePage,
    }, {
      path: '/showList',     //列表展示
      name: 'ShowList',
      component: ShowList,
    }, {
      path: '/mailList',      //通讯录
      name: 'MailList',
      component: MailList,
    }, {
      path: '/mailTotal',      //总行通讯录内容
      name: 'MailTotal',
      component: MailTotal,
    }, {
      path: '/mailBranch',      //支行通讯录内容
      name: 'MailBranch',
      component: MailBranch,
    }, {
      path: '/Query',
      name: 'Query',
      component: Query,
    }, {
      path: '/List',
      name: 'List',
      component: List,
      // beforeEnter: (to, from, next) => {
      //   if (store.state.list.query.cate) {
      //     next()
      //   }else{
      //     router.push('/query');
      //   }
      // }
    },
    // {
    //   path: '/list/:id',
    //   name: 'Detail',
    //   component: Detail,
    // }
  ],
});

// router.beforeEach((to, from, next) => {
//   if (to.name === 'Login' || store.state.user.token) {
//     next();
//   } else {
//     router.push('/login');
//   }
// })
export default router