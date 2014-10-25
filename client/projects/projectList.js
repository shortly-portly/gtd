Template.projectList.helpers ({
  projects: function() {
    return Cards.find({type: "project"});
}
});


Template.projectList.events ({
  'change .project-list': function (event) {

    var newValue = $(event.target).val();

    /* if changing projects then remove any dependent action
    /* probably need to do this for actions that are dependent on this action as
    /* well */

    Cards.update(this._id, {$unset: {dependent: ""}});
    Meteor.call("removeDependents", this._id);
    /* Cards.update({dependent: this._id}, {$set: {dependent: ""}}); */


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
