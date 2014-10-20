Template.actionJournal.helpers({
  journalEntry: function() {
    var entries = Cards.find({parent: this._id, type: 'journal'}).fetch();

    var currentDate = 0;

    /* Only display the full date + time if this is the first time we've
    /* displayed this journal entry. Subsequent journal entries for the same
    /* date will only display the time. */

    _.each(entries, function(entry) {

      var createdAt = new Date(entry.createdAt);

      if (moment(createdAt).isSame(new Date(currentDate), 'day')) {
        entry.displayDate = moment(createdAt).format('hh:mm');
      } else {
        entry.displayDate = moment(createdAt).format("dddd, MMMM Do YYYY, hh:mm a");
      }

      currentDate = entry.createdAt;
    });

    return(entries);


  }
});
