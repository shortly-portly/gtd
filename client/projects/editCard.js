Template.editCard.events({
  'click .cancel-edit': function(event) {

    event.preventDefault();

    Cards.update(this._id, {$set: {mode: 'view'}});

    Session.set('cancelled', this._id);

  }
});
