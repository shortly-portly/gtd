UI.body.helpers ({
  scrollTo: function() {
    var id = Session.get("id");

    if (id) {
      $('html, body').animate({
          scrollTop: ($('#' + id).offset().top)
      },500);

    }

    Session.set('id', null);
  }
});

Meteor.subscribe('cards');
Meteor.subscribe('people');
