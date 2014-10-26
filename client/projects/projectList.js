Template.projectList.helpers ({
  projects: function() {
    return Cards.find({type: "project"});
}
});


Template.projectList.events ({
  'change .project-list': function (event) {

    var newValue = $(event.target).val();

    Cards.update(id, {$unset: {dependent: ""}});


    Meteor.call("removeDependents", this._id);

    if (newValue == "none") {
      Cards.update(this._id, {$unset: {project: ""}});
      return;
    }

    if (newValue == "new") {
      newValue = Meteor.common.newProject();
    }

    Cards.update(this._id, {$set: {project: newValue}});
  }
});
