Template.projectList.helpers ({
  projects: function() {
    return Cards.find({type: "project"});
}
});


Template.projectList.events ({
  'change .project-list': function (event) {

    var newValue = $(event.target).val();
    console.log("sub-project change");

    if (newValue == "none") {
      console.log("deleting the project reference");
      Cards.update(this._id, {$unset: {project: ""}});
      return;
    }

    if (newValue == "new") {
      newValue = Meteor.common.newProject();
    }

    Cards.update(this._id, {$set: {project: newValue}});
  }
});
