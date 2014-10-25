Cards = new Meteor.Collection('cards');

Cards.allow({
  insert: function() {
    return true;
  },
  update: function() {
    return true;
  },
  remove: function() {
    return true;
  }
});

Meteor.methods ({
  removeDependents: function(id) {
    Cards.update({dependent: id}, {$set: {dependent: ""}});
  }
});
