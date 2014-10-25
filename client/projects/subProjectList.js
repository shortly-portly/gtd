Template.subProjectList.helpers ({
  projects: function() {
    var projects = Cards.find({type: "project"}).fetch();
    var project = this;

    /* Get the list of all sub projects for ths project */
    var subProjects = Meteor.common.getSubProjects(project);

    /* Remove each actual sub project from the list of potential sub project
    /* (this prevents allocating a project to a sub project of the project) */
    _.each(subProjects, function(subProject) {
      projects = _.reject(projects, function(p) {

        return p._id == subProject._id;
      });

    });

    return projects;
}
});

Template.subProjectList.events ({
  'change .sub-project-list': function (event) {

    var newValue = $(event.target).val();

    if (newValue == "none") {
      Cards.update(this._id, {$unset: {project: ""}});
      return;
    }

    if (newValue == "new") {
      newValue = Meteor.common.newProject();
    }
    Cards.update(this._id, {$set: {project: newValue}});
  },
  'click .sub-project': function(event) {
    event.preventDefault();

    if (this.project) {

      var subProject = Cards.findOne(this.project);
      if (!subProject.visible) {
        Cards.update(subProject._id, {$set: {visible: true}});
      }

      Session.set('id', subProject._id);
    }
  }
});
