Meteor.EmailHelper = {
  sendEmail: function(params, cb){
    Meteor.call('sendEmail', params, function(err, res){
        if (err)
          cb({success: false, res: err}); return false;
    });
  }
}
