Template.project.events({
    'click .new-action': function() {
      Meteor.common.newAction({project: this._id});
    },
    'click .action-title': function() {
      if (!this.visible) {
        Cards.update(this._id, {$set: {visible: true}});
      }

      Session.set('id', this._id);
    }
});

Template.project.helpers({
  actionTitle: function() {
    return Cards.find({project: this._id, type: 'action'});
  },
  subProjectTitle: function() {
    return Cards.find({project: this._id, type: "project"});
  }
});

/* if the project we've just rendered is as a result of a
  cancelled edit then the mouseenter event won't have been triggered.
  We therefore need to simulate it ourselves */

Template.project.rendered = function() {

  var cancelledCard = Session.get('cancelled');

  if (this.data._id == cancelledCard) {
    var menu = this.find('.menu');
    $(menu).addClass('visible');
  }

};
