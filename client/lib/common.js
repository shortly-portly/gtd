Meteor.common = {

  newAction: function(action) {
    var title = prompt("Enter name for new Action:");
    if (title) {
      var card = {
        title: title,
        type: "action",
        visible: true
      };
      card = _.extend(card, action);
    


      var id = Cards.insert(card);
      console.log(id);

      Session.set('id', id);


      $('html, body').animate({
          scrollTop: ($('#cards').offset().top)
      },500);


    }
  },

  newProject: function() {
    var title = prompt("Enter name for new Project:");
    if (title) {
      var card = {
        title: title,
        type: 'project',
        visible: true
      };

      var id = Cards.insert(card);
      console.log(id);

      Session.set('id', id);

      $('html, body').animate({
          scrollTop: ($('#cards').offset().top)
      },500);

    }
  }
};
