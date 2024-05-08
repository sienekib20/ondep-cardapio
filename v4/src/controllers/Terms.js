class Terms {
  static terms(req, res) {
    res.render('site/terms', {
      layout: null,
      title: 'Termos de uso'
    });
  }

  static policy(req, res) {
    res.render('site/policy', {
      layout: null,
      title: 'Termos de uso'
    });
  }
}

module.exports = Terms;