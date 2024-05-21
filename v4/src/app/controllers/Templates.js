class Templates {

  static index(request, response) {
    response.render('site/restaurantes', { title: 'Restaurantes' });
  };

  static preview(request, response) {

    let uuid = request.params.id;

    response.render('site/tmp-preview', {title: 'Live Preview'});
  }
}


module.exports = Templates;