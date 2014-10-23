Template.dependentAction.helpers({
  selected: function() {


    var dependentId = Template.parentData(1).dependent;
    if (this._id == dependentId) {
      return "selected";
    }
  }
});
