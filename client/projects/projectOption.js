Template.projectOption.helpers({
  selected: function() {
    var projectId = Template.parentData(1).project;
    if (this._id == projectId) {
      return "selected";
    }
  }
});
