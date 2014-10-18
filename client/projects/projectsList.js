Template.projectsList.helpers ({
  projects: function() {
    return Cards.find({type: "project"});
}
});
