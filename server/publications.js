Meteor.publish("cards", function () {
  return Cards.find();
});

Meteor.publish('people', function() {
  return People.find();
});
