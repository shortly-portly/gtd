Template.dependentList.helpers ({
  actions: function() {
    var actions = Cards.find({project: this.project, type: "action"}).fetch();
    var currentAction = this;
    

    var dependentActions = _.reject(actions, function(action) {
       return currentAction._id === action._id;
    });

    return dependentActions;
}
});

Template.dependentList.events ({
  'change .dependent-action-list': function (event) {

    var newValue = $(event.target).val();

    if (newValue == "none") {
      Cards.update(this._id,
        {$unset: {dependent: ""}, $set: {status: 'next'}});
      return;
    }

    if (newValue == "new") {
      newValue = Meteor.common.newAction();
      console.log('new action created with id of...' + newValue);
    }



    Cards.update(this._id, {$set: {dependent: newValue, status: 'waiting'}});
  }
});
