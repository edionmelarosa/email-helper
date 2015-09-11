Package.describe({
  name: 'edionme:email-helper',
  version: '0.0.1',
  summary: 'This package help you with you sending emails',
  git: 'https://github.com/edionmelarosa/email-helper',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.1.0.3');
  api.addFiles('server/email-helper.js', 'server');
    api.addFiles('server/smtp.js', 'server');
  api.addFiles('client/email-helper.js', 'client');
});
