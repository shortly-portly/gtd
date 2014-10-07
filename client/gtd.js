UI.body.helpers ({
  scrollTo: function() {
    var id = Session.get("id");

    if (id) {
      console.log("id found");
      $('html, body').animate({
          scrollTop: ($('#' + id).offset().top)
      },500);

    }

    Session.set('id', null);
  }
});
