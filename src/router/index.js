import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

//   根据路由动态渲染导航菜单
//   必填项
//   name  名称
//   path  路径
//   redirect 改变跳转路由方向（选填）
//   hidden  是否显示 如登录页不需要导航  true （选填）
//   component: Layout
//   meta： [icon:'',title]  meta里面的icon填写图片路径  title浏览器窗口名称

export const constantRoutes = [
  {
    path: '/',
    component: () => import('@/views/recruitviews/login/index'),
    hidden: true
  },
  {
    path: '/register',
    component: () => import('@/views/recruitviews/register/index'),
    hidden: true
  },
  {
    path: '/recruitviews/home',
    component: () => import('@/views/recruitviews/home/index'),
    hidden: true
  },
  {
    path: '/recruitviews/postdelivery',
    component: () => import('@/views/recruitviews/postdelivery/index'),
    hidden: true
  },
  {
    path: '/recruitviews/postdelivery/:id',
    component: () => import('@/views/recruitviews/postdelivery/info'),
    hidden: true
  },
  {
    path: '/recruitviews/notes/index/:id',
    component: () => import('@/views/recruitviews/notes/index'),
    hidden: true
  },
  {
    path: '/recruitviews/delivery',
    component: () => import('@/views/recruitviews/delivery/index'),
    hidden: true
  },
  {
    path: '/recruitviews/personal',
    component: () => import('@/views/recruitviews/personal/index'),
    hidden: true
  },
  {
    path: '/recruitviews/notice',
    component: () => import('@/views/recruitviews/notice/index'),
    hidden: true
  },
  {
    path: '/recruitviews/usercenter',
    component: () => import('@/views/recruitviews/usercenter/index'),
    hidden: true
  },
  {
    path: '/recruitviews/notice/:id',
    component: () => import('@/views/recruitviews/notice/info'),
    hidden: true
  }
]

export const asyncRoutes = [{ path: '*', redirect: '/404', hidden: true }]

const createRouter = () =>
  new Router({
    // mode: 'history', // require service support
    scrollBehavior: () => ({ y: 0 }),
    routes: constantRoutes
  })

const router = createRouter()

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}

export default router
