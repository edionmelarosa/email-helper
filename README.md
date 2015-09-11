Meteor package helper for sending emails.

* This package requires [email package](https://atmospherejs.com/meteor/email)

###Installation:

```
meteor add edionme:email-helper
```

###Setup

This package read **smtp** configurations from your settings file. You need to add "smtp" object from your settings file. e.g
```
{
  "smtp": {
    "username": "yourusername",
    "password": "yourpassword",
    "host": "yourhost",
    "port": yourport
  }
}
```
Then, run your app:
```
meteor run --settings /pathtoyoursettingsfile/
```

###Usage
Call Meteor.EmailHelper.sendEmail() to send email. e.g

```
// send email
var params = {
  from: "fromemail",
  to: "toemail",
  subject: "subject",
  text: "emailcontent"
};
Meteor.EmailHelper.sendEmail(params);
```

Check [Meteor email docs for more info](http://docs.meteor.com/#/full/email_send)
