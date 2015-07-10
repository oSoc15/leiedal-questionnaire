Leiedal Questionnaire
=====================================

A web application for [Leiedal](http://www.leiedal.be/). Determines the users ecolabel and gives the appropriate advice.
Part of an application that consists of [leiedal-questionnaire-api](https://github.com/oSoc15/leiedal-questionnaire-api) and [leiedal-questionnaire](https://github.com/oSoc15/leiedal-map).

[View contributors](https://github.com/oSoc15/leiedal-questionnaire/graphs/contributors)

---

### Getting up and running

1. Clone this repo from `https://github.com/oSoc15/leiedal-questionnaire`
2. Run `npm install` from the root directory
3. Run `gulp dev` (may require installing Gulp globally `npm install gulp -g`)
4. Your browser will automatically be opened and directed to the browser-sync proxy address
5. To prepare assets for production, run the `gulp prod` task (Note: the production task does not fire up the express server, and won't provide you with browser-sync's live reloading. Simply use `gulp dev` during development. More information below)

Now that `gulp dev` is running, the server is up as well and serving files from the `/build` directory. Any changes in the `/app` directory will be automatically processed by Gulp and the changes will be injected to any open browsers pointed at the proxy address.

---

It uses the `https://github.com/jakemmarsh/angularjs-gulp-browserify-boilerplate` as a boilerplate
