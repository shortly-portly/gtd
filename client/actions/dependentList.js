Template.dependentList.helpers ({
  actions: function() {
    console.log(this);
    var actions = Cards.find({project: this.project, type: "action"}).fetch();
    var currentAction = this;

    console.log("actions");
    console.log(actions);


    var dependentActions = _.reject(actions, function(action) {
       return currentAction._id === action._id;
    });

    return dependentActions;
}
});

Template.dependentList.events ({
  'change .dependent-action-list': function (event) {

    var newValue = $(event.target).val();
    console.log("dependent action change");

    if (newValue == "none") {
      console.log("deleting the dependent action");
      Cards.update(this._id, {$unset: {dependent: ""}});
      return;
    }

    if (newValue == "new") {
      newValue = Meteor.common.newAction();
    }

    Cards.update(this._id, {$set: {dependent: newValue, status: 'next'}});
  }
});
