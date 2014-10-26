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

    /* if changing projects then remove any dependent action
    /* Need to do this for actions that are dependent on this action as
    /* well */

    Cards.update(id, {$unset: {dependent: ""}});    
    Cards.update({dependent: id}, {$set: {dependent: ""}});
  }
});
