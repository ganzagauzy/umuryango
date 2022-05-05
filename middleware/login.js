export default ( ctx ) => {
  let token = window.localStorage.getItem('token')
    if (token == null ) {
      return ctx.redirect('/auth/login');
    }
  }