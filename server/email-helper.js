Meteor.methods({
  sendEmail:function(params){
    this.unblock();
    
    Email.send(params);
  }
});
