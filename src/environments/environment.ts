// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  apiUsername: 'tmorren',
  apiPassword: '80GFTJ3iOo7s',
  baseUrl: 'https://api.mysportsfeeds.com/v1.1/pull/nba',

  newsApiKey: '7f7d532d651549d6b0e1fff3fbb22dff',
  newsApiBaseUrl: 'https://newsapi.org/v2/top-headlines',
  newsApiUrl: 'https://newsapi.org/v2/top-headlines?sources=bleacher-report,espn&q=nba&apiKey=7f7d532d651549d6b0e1fff3fbb22dff'  
};
