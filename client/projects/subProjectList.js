Template.subProjectList.helpers ({
  projects: function() {
    var projects = Cards.find({type: "project"}).fetch();
    id = this._id;
    project = this;



    wibble = Meteor.common.getSubProjects(project);

    console.log(project.title);
    console.log("============");
    console.log("wibble");
    console.log(wibble);
    blah = projects;
    console.log("lenght...." + blah.length);
    _.each(wibble, function(w) {
      blah = _.reject(blah, function(p) {
        console.log ("compare..." + p._id + " with " + w._id);
        return p._id == w._id;
      });
      console.log("new blah length..." + blah.length);
    });
    console.log("lenght...." + blah.length);
    console.log("blah");
    console.log(blah);
    return blah;

   /* return _.reject(projects, function(p) {
      return p._id == id;
    }); */
}
});

Template.subProjectList.events ({
  'change .sub-project-list': function (event) {

    var newValue = $(event.target).val();
    console.log("sub-project change");

    Cards.update(this._id, {$set: {project: newValue}});
  }
});
