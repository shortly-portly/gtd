Template.projectList.helpers ({
  projects: function() {
    return Cards.find({type: "project"});
  }
});

Template.projectList.events ({
  'change .project-list': function (event) {
    console.log(event);
    console.log(this);

    var newValue = $(event.target).val();
    Cards.update(this._id, {$set: {project: newValue}});
  }
});
