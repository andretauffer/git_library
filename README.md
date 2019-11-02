## Basic setup

This repo is a basic react-express-postgresql setup using docker to serve the database.

It contains a working "feature slice"(login), a feature working from the client to the database to showcase a project pattern.
It might as well be deleted if your only interest is the setup.

This is a new repo and it's based on the build of other projects I've been working in. I'm trying to keep it clean to be a nice start up reference for new projects, but at the same time I am adding some code that already follows design patterns of my preference.

If you're using this repo to setup your own project I would really appreciate any reviews you'd like to provide. If you'd like to suggest changes you could do it through messaging me somehow or through pull requests.

Be aware I just started this repo and might be updating it from now on to complete it. Testing is still to be updated.

To get it running run npm install inside the root and inside the client folder. Then run follow this READ ME.

### to finish the database setup

Update the docker-compose.yaml file with your database information:
container_name(both inside services and admin), networks(inside services, admin and networks), environment
Then update the configurations.js file databaseConnectionString with your database user, password and database name.

Migration code can be written in the db-setup file but...

### TO BE UPDATED TO

Migration code can be written as psql file inside the migration folder and run with npm run db-reset

### Available scripts

To be updated
next scripts:
npm run db-reset
npm run server-test
npm run push-production

### to run the client `npm run client`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### to run the server`npm run server`

Runs the server in the development mode.<br>
Open [http://localhost:5000](http://localhost:5000) to see Hello World in the browser.

### to run the database`npm run db`

Runs the database in the development mode.<br>
The db is run on port 5432 inside a docker container

### to run client tests `npm client-test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### Making a Progressive Web App

To be updated

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Deployment

To be updated
