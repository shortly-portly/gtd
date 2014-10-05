Meteor.common = {

  newAction: function() {
    var title = prompt("Enter name for new Action:");
    if (title) {
      var card = {
        title: title,
        type: "action"
      };

      Cards.insert(card);
      console.log("Card Created");

      cards = Session.get('cards');
      cards.unshift(card);
      Session.set('cards', cards);

    }
  }
};
