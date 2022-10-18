export default function (context) {
  context.store.dispatch('initAuth', context.req)
  if (context.route.path === '/admin/auth' && context.store.getters.isAuth) {
    context.redirect('/admin')
  }
}
