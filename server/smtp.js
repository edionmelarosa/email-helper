Meteor.startup(function () {
  if (typeof Meteor.settings.smtp === "undefined") {
      console.log("Can't find smtp object on your settings file.");
      return false;
  }
  var _base = Meteor.settings.smtp;
  
  check([_base.username, _base.password, _base.host], [String]);
  check(_base.port, Number);

  process.env.MAIL_URL = "smtp://"+_base.username+":"+_base.password+"@"+_base.host+":"+_base.port;
});
