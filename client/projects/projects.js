Template.project.events({
    'click .new-action': function() {
      Meteor.common.newAction({project: this._id});
    },
    'click .action-title': function() {
      if (!this.visible) {
        console.log("opening up");
        Cards.update(this._id, {$set: {visible: true}});
      }

      Session.set('id', this._id);
    }
});

Template.project.helpers({
  actionTitle: function() {
    return Cards.find({project: this._id});
  }
});
