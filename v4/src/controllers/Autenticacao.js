class Autenticacao {
  static index(request, response) {
    response.render('auth/login', { layout: null, title: 'Login' });
  }
}

module.exports = Autenticacao;