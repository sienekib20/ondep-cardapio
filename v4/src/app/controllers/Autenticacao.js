class Autenticacao {
  static index(request, response) {
    response.render('auth/login', { title: 'Login' });
  }

  static pwd_recover(req, res) {
    res.render('auth/recover', {
      title: 'Recover'
    });
  }
}

module.exports = Autenticacao;