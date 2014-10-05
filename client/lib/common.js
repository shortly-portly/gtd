Meteor.common = {

  newAction: function() {
    var title = prompt("Enter name for new Action:");
    if (title) {
      var card = {
        title: title,
        type: "action",
        visible: true
      };

      Cards.insert(card);
      console.log("Card Created");


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

      Cards.insert(card);

      $('html, body').animate({
          scrollTop: ($('#cards').offset().top)
      },500);

    }
  }
};
