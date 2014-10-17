Template.editProject.events({
  'click .cancel-edit': function(event) {

    event.preventDefault();

    var card = this.type.replace('edit','');
    console.log(card);
    Cards.update(this._id, {$set: {type: 'project'}});

    Session.set('cancelled', this._id);

  }
});
