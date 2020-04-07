## Github Library

This project is a github search engine that allows for searching repositories and code snippets through the github REST api v3.
The search results are displayed in 10 by page, in boxes that display the repo name, owner and a description when available. Each result box when clicked opens a new tab to show the repo/code in github.
The feed in the center gets populated on every load with the most recently updated repositories related to the most popular search topics in this platform, that are found in the database sorted by the latest updated.
The database runs on a docker container. However, the search engine and the default feed should work even without a running database.

### Next steps for the project

1.  Add sorting options for the feed.

2.  Add codes search results to the feed.

3.  Add other search options.

4.  Get authentication and permission for the app so that it is possible to:

- Personalize the search topics for the feed with user specific keywords.
- Show starred, forked, watched repos for the user in a new route.
- Star/unstar or watch/unwatch the search results.
- Ultimately use starred, watched, forked, followed user... and any extra possible info regarding the interests of the user to build the feed.

### Tech stack

The project was setup with react's cra for the client and an express node server. It also has a docker running a psql database.

### Available scripts

All the following scripts should be ran in the root directory of the project.

### to run the client `npm run client`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### to run the server `npm run server`

Runs the server in the development mode.<br>
Open [http://localhost:8000](http://localhost:8000) to see Hello World in the browser.

### to run the database `npm run db`

Runs the database in the development mode.<br>
The db is run on port 5432 inside a docker container

### to initiate the database schema `npm run db:init`

Initiates the database schema by creating the tables required for the app.<br>

### to run the linter `npm run lint`

Runs eslint with the fix tag. This script runs on every commit and will stop the commit in two scenarios:

1. The linter finds any error
2. The linter finds more than 10 warnings

### To Run this project

- Requirements
  1. npm
  2. docker if you wish to run the db functionalities. However the search engine and the default feed will work without the database. To install docker and be able to run the full project follow I recommend this article on how to do it in ubuntu 18.04: https://www.digitalocean.com/community/tutorials/how-to-install-and-use-docker-on-ubuntu-18-04

Steps to get it running using npm:

All the following cli commands should be ran inside the root directory.

1.  Clone the repo in your chosen directory then run:

```
cd git_library
```

2.  Install dependencies for the express server in the root by running:

```
npm i
```

3.  Install dependencies for the react client inside the client folder by running the following cli command in the root:

```
cd client && npm i && cd ..
```

4.  Start the database by running the following script in the root:

```
npm run db
```

5.  In a new terminal tab, initiate the database schema by running the following script in the root:

```
npm run db:init
```

6.  Then start the server (when the db is ready) by running the following script in the root:

```
npm run server
```

7.  In a new terminal tab, start the client by running the following script in the root:

```
npm run client
```

8.  Go to [http://localhost:3000](http://localhost:3000) and enjoy the search engine;
