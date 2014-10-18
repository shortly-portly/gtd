Template.contactOption.helpers({
  selected: function() {
    var contactId = Template.parentData(1).contact;
    if (this._id == contactId) {
      return "selected";
    }
  }
});
