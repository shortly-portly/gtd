Meteor.common = {

  newAction: function(action) {
    var title = prompt("Enter name for new Action:");
    if (title) {
      var card = {
        title: title,
        type: "action",
        visible: true
      };
      card = _.extend(card, action);



      var id = Cards.insert(card);
      console.log(id);

      Session.set('id', id);

    }
  },

  getSubProjects: function(project) {
    var results = [];
    results.push(project);

    subProjects = Cards.find({project: project._id, type: "project"}).fetch();

    while (subProjects.length > 0) {
      results = results.concat(subProjects);
      subResults = [];

      _.each(subProjects, function(p) {
        p = Cards.find({project: p._id, type: "project"}).fetch();
        if (p.length > 0) {
          subResults = subResults.concat(p);
        }

        results = results.concat(subResults);

        subProjects = subResults;

      });

    }
        return results;
  },

  newProject: function() {
    var title = prompt("Enter name for new Project:");
    if (title) {
      var card = {
        title: title,
        type: 'project',
        visible: true
      };

      var id = Cards.insert(card);
      console.log(id);

      Session.set('id', id);
    }
  }
};
