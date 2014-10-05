Template.cardDetail.events({
  'click .close-card': function(event) {
    console.log(event);
    console.log(this);
    event.preventDefault();
    Cards.update(this._id, {$set: {visible: false}});

  }
});
