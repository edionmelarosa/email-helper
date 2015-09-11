Meteor.EmailHelper = {
  sendEmail: function(params){
    Meteor.call('sendEmail', params);
  }
}
