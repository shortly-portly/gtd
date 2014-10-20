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
