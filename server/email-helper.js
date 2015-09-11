Meteor.methods({
  sendEmail:function(params){

    check(params, Object)

    this.unblock();

    Email.send(params);
  }
});
