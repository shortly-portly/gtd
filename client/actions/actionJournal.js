Template.actionJournal.helpers({
  journalEntry: function() {
    return Cards.find({parent: this._id, type: 'journal'});
  },
  displayDate: function() {
    return moment(new Date(this.createdAt)).format('MMMM Do YYYY, h:mm:ss a');
  }
});
