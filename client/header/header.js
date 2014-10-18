Template.header.events({
    'click .new-action': function() {
      var newAction = {};
      Meteor.common.newAction(newAction);
    },
    'click .new-project': function() {
      var newProject = {};
      Meteor.common.newProject(newProject);
    },
    'click .list-projects': function() {
      var projects = Cards.findOne({type:'projects'});
      var projectId;

      if (projects) {
        projectsId = projects._id;
        Cards.update(projects._id, {$set: {visible: true}});
      } else {
        var data = {
          type: 'projects',
          mode: 'view',
          visible: 'true'
        };
        projectsId = Cards.insert(data);
      }

      Session.set('id', projectsId); 
    }
});
