/* jshint node: true */

module.exports = function (environment) {
  var ENV = {
    modulePrefix: 'dummy',
    environment: environment,
    rootURL: '/',
    locationType: 'auto',
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      }
    },

    APP: {
      // portalBaseUrl: 'https://qaext.arcgis.com',
      // arcgisPortal: {
      //   domain: 'arcgis.com',
      //   env: 'qaext',
      //   maps: 'mapsqa',
      // },
    },
    torii: {
      sessionServiceName: 'session',
      providers: {
        'arcgis-oauth-bearer': {
          apiKey: 'x3u9xkfpYyYbJu08', // production
          // apiKey: 'VpiQwiuWl7KMTGys', // qaext
          // portalUrl: 'https://qaext.arcgis.com'
          portalUrl: 'https://www.arcgis.com'
        }
      }
    }
  };

  // ENV.torii.providers['arcgis-oauth-bearer'].portalUrl = ENV.APP.portalBaseUrl;

  if (environment === 'development') {
    // if you need to test against dev API/data:
    // const env = 'dev';
    // ENV.torii.providers['arcgis-oauth-bearer'].apiKey = 'ifq94vTWyyZclwNz';

    // if you need to test against QA API/data:
    // const env = 'qa';
    // ENV.torii.providers['arcgis-oauth-bearer'].apiKey = 'VpiQwiuWl7KMTGys';

    // set dev/qa portalUrl
    // ENV.torii.providers['arcgis-oauth-bearer'].portalUrl = `https://${env}ext.arcgis.com`;

    // PROD
    ENV.torii.providers['arcgis-oauth-bearer'].apiKey = 'x3u9xkfpYyYbJu08';
    ENV.torii.providers['arcgis-oauth-bearer'].portalUrl = `https://www.arcgis.com`;
  }

  if (environment === 'devext') {
    // DEV App Item c1e1128849684e05a18f211ef0c61633
    ENV.torii.providers['arcgis-oauth-bearer'].apiKey = 'dis8Iu8I0bACZOba';
    ENV.torii.providers['arcgis-oauth-bearer'].portalUrl = 'https://devext.arcgis.com';
  }

  if (environment === 'koopernetes') {
    ENV.torii.providers['arcgis-oauth-bearer'].apiKey = 'arcgisonline';
    ENV.torii.providers['arcgis-oauth-bearer'].portalUrl = 'https://gis.koopernetes.com/portal';
  }

  if (environment === 'qaext') {
    // QA App Item: 1452439af4af473ea3c133b7edf0a147
    ENV.torii.providers['arcgis-oauth-bearer'].apiKey = 'VpiQwiuWl7KMTGys';
    ENV.torii.providers['arcgis-oauth-bearer'].portalUrl = 'https://qaext.arcgis.com';
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
  }

  if (environment === 'production') {
    // PROD App Item: 2ef3c71bc5414f8b951c370cea132bf0
    ENV.locationType = 'hash';
    ENV.rootURL = '/';
    ENV.torii.providers['arcgis-oauth-bearer'].apiKey = 'x3u9xkfpYyYbJu08';
    ENV.torii.providers['arcgis-oauth-bearer'].portalUrl = 'https://www.arcgis.com';
  }

  return ENV;
};
