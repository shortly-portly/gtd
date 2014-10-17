Template.cardDetail.events({
  'click .close-card': function(event) {

    event.preventDefault();
    Cards.update(this._id, {$set: {visible: false}});

  },
  'mouseenter .card': function(event) {
    $(event.target).find('.menu').addClass('visible');
  },
  'mouseleave .card': function(event) {
    $(event.target).find('.menu').removeClass('visible');
  }

});
