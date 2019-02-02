# NBA

#### _Single Webpage for Epicodus, 2.1.2019_

### https://nba-glenpogz36.firebaseapp.com/
#### By _Glen Sale_

## Description

_Multiple components that allows users to use multiple database and API calls to return a routing path. A user is able to select a url and input any information or select information regarding NBA players. Also users are able to select a player and able to match up their skill sets_

### Specs
| Spec | Input | Output |
| :-------------    | :------------- | :-------------|
| Program uses API & Databases  of User| Input in .env: exports.apiKey = "[Your API]" | Output: key=${process.env.exports.apiKey} |
| Program uses API & Databases for Player Search| Input: "Name" | Output: "A list of Players info"  |
| Program uses API & Databases for NBA News| Input: 1234 | Output: Invalid |
| Program uses API & Databases for that checks if a criteria is met| Input: "Test" | Output: "No players meet the criteria" |
| Program uses API & Databases for to compare players| Input: "name" |Output: "Statistic" |
| Program uses API & Databases for returning Error Message| Input: 1234 | Output: Invalid |
| Program uses API & Databases for that checks if a criteria is met| Input: "Test" | Output: "No Nba players meet the criteria" |

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.2.1.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).



## Firebase Set up
As soon as the project has a dedicated Firebase project to host it, we'll create several configuration files in our project directory that Firebase requires to host a project.

To do this, we'll use the firebase-tools npm package. This package provides additional Firebase capabilities directly from the command line.

We can install it using npm:

$ npm install -g firebase-tools
Once installed, run the login command:

$ firebase login
This will open a browser window prompting you to log into your Google/Firebase account.

Next, initialize Firebase in the root directory of the Angular project you'd like to deploy:

$ firebase init

Your application should now be correctly configured for deployment. You can now deploy with the deploy command:

$ firebase deploy

## Technologies Used
* _Javascript_
* TypeScript_
* Chart.js
* _Node Package Manager (NPM)_
* _Angular (Ng)_
* _JSON_
* _Webpack_
* _eslintrc_
* _.env_
* _gitignore_
* _Jasmine and Karma (testing)_
* _Babel_
* _Terminal_
* _VS Code_
* _GitHub_
* _Firebase_

### License

*This software is licensed under the MIT license.*

Copyright (c) 2019  _Glen Sale_
