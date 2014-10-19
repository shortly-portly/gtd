Template.actionJournal.helpers({
  journalEntry: function() {
    var entries = Cards.find({parent: this._id, type: 'journal'}).fetch();

    if (entries.lenght === 0 ) {
      return entries;
    }

    var currentDate = 0;

    _.each(entries, function(entry) {

      if (moment(new Date(entry.createdAt)).isSame(new Date(currentDate), 'day')) {
        entry.displayDate = moment(new Date(entry.createdAt)).format('hh:mm');
      } else {
        entry.displayDate = moment(new Date(entry.createdAt)).format("dddd, MMMM Do YYYY, hh:mm a");
      }

      currentDate = entry.createdAt;
    });

    return(entries);


  }
});
