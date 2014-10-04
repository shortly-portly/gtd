if (Meteor.isClient) {
  // counter starts at 0
  Session.setDefault("counter", 0);

  Template.project.events({
    'click .blah': function() {
      var wibble = prompt("you want a new project");
    }
  });

}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
