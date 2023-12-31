
const routes = [
  {
    path: '/',
    component: () => import('src/layouts/HeaderLayout.vue'),
    children: [
      { path: '', component: () => import('src/pages/Index.vue') },
      { path: 'new', component: () => import('src/pages/New.vue') },
      { path: 'note/:id', component: () => import('src/pages/Note.vue') }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
