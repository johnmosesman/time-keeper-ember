/* jshint node: true */

module.exports = function(environment) {
  var ENV = {
    modulePrefix: 'time-keeper-ember',
    environment: environment,
    baseURL: '/',
    locationType: 'auto',
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      }
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    }
  };

  ENV['simple-auth'] = {
    authorizer: 'simple-auth-authorizer:devise',
    // routeAfterAuthentication: 'dashboard'
  };

  ENV['simple-auth-devise'] = {
    resourceName: 'user',
    tokenAttributeName: 'token',
    identificationAttributeName: 'email'
  };

  if (environment === 'development') {
    ENV['host'] = 'http://localhost:3000';

    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.baseURL = '/';
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
  }

  if (environment === 'production') {
    ENV['simple-auth-devise']['serverTokenEndpoint'] = 'https://time-keeper.herokuapp.com/users/sign_in';
    ENV['simple-auth-devise']['crossOriginWhitelist'] = ['https://time-keeper.herokuapp.com/'];

    ENV['host'] = 'https://time-keeper.herokuapp.com';
  }

  return ENV;
};
