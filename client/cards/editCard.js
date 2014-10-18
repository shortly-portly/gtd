Template.editCard.events({
  'click .cancel-edit': function(event) {

    event.preventDefault();

    Cards.update(this._id, {$set: {mode: 'view'}});

    Session.set('cancelled', this._id);

  },

  'click .save-card': function(event, template) {
    var title = template.find("input[name=title]");
    var text = template.find("textarea[name=notes]");

    var data = {
      title: title.value,
      notes: text.value,
      mode: 'view'
    };

    Cards.update(this._id, {$set: data});

  }
});
