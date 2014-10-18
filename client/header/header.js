Template.header.events({
    'click .new-action': function() {
      var newAction = {};
      Meteor.common.newAction(newAction);
    },
    'click .new-project': function() {
      var newProject = {};
      Meteor.common.newProject(newProject);
    }
});
