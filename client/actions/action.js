Template.projectList.helpers ({
  projects: function() {
    return Cards.find({type: "project"});
  }
});
