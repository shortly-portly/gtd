Template.contactList.helpers ({
  contacts: function() {
    return People.find();
}
});

Template.contactList.events ({
  'change .contact-list': function (event) {

    var newValue = $(event.target).val();


    People.update(this._id, {$set: {contact: newValue}});
  }
});

Template.contactList.events ({
  'change .contact-list': function (event) {

    var newValue = $(event.target).val();
    console.log("contact change");

    if (newValue == "none") {
      console.log("deleting the contact reference");
      Cards.update(this._id, {$unset: {contact: ""}});
      return;
    }

    if (newValue == "new") {
      newValue = Meteor.common.newContact();
    }

    Cards.update(this._id, {$set: {contact: newValue}});
  }
});
