Template.editProject.events({
  'click .cancel-edit': function(event) {
    
    event.preventDefault();
    Cards.update(this._id, {$set: {type: 'project'}});

    Session.set('cancelled', this._id);

  }
});
