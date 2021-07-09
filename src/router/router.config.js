/**
 * 基础路由
 * @type { *[] }
 */
export const constantRouterMap = [
  {
    path: '/',
    component: () => import('@/views/layouts/index'),
    redirect: '/home',
    meta: {
      title: '首页',
      keepAlive: false
    },
    children: [
      {
        path: '/home',
        name: 'Home',
        component: () => import('@/views/home/index'),
        meta: { title: '首页', keepAlive: false }
      },
      {
        path: '/classification',
        name: 'Classification',
        component: () => import('views/home/classification'),
        meta: { title: '分类', keepAlive: false }
      },
			{
			  path: '/shoppingcart',
			  name: 'ShoppingCart',
			  component: () => import('views/home/shoppingcart'),
			  meta: { title: '购物车', keepAlive: false }
			},
      {
        path: '/mine',
        name: 'Mine',
        component: () => import('views/home/mine'),
        meta: { title: '我的', keepAlive: false }
      }
    ]
  }
]
