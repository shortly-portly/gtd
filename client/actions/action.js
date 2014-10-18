Template.action.events({
  'click .update-journal': function(event, template) {

    event.preventDefault();
    console.log(this);

    var text = template.find("textarea[name=journal]");
    if (!text.value) {
      return;
    }

    var data = {
      text: text.value,
      parent: this._id,
      type: 'journal',
      mode: 'view',
      createdAt: Date()
    };

    Cards.insert(data);

    text.value = "";

  }
});
