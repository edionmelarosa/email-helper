Meteor.methods({
  sendEmail:function(params){

    check(params, Object)

    this.unblock();

    return Email.send(params);
  }
});
