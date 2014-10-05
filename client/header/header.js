Template.header.events({
    'click .new-action': function() {
      Meteor.common.newAction();
    },
    'click .new-project': function() {
      Meteor.common.newProject();
    }
});
