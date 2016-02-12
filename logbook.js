if (Meteor.isClient) {

  Template.page.helpers({
    all_entries: function() {
      return Entry.find().fetch();
    }
  });

  Template.newLog.events({
    'click #submit-button': function() {
      Entry.insert(
        {
          date: $('#date').val(),
          totalMileage: $('#total-mileage').val(),
          tripMileage: $('#trip-mileage').val()
        });
    }
  });
}

if (Meteor.isServer) {
  /*Meteor.startup(function () {
  
  });*/
}
