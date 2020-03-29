## Github Library

This project is a github search engine that allows for searching repositories and code snippets through the github REST api v3.
Right now the project has a seach engine that allows for searching repos or code and search by user. The results are displayed in 10 by page, in boxes that display the repo name, owner and a description when available.Each result box when clicked opens a new tab to show the repo/code in github.
It also has a feed that gets populated using the latest search topics found in the database.

### Next steps for the project

Get authentication and permission for the app so that we can:

- Personalize the search topics for the feed with user specific keywords.
- Show starred, forked, watched repos for the user.
- Star or watch the search results.

### Tech stack

The project was setup with react's cra for the client and an express node server. It also has a docker running a psql database.

### Available scripts

### to run the client `npm run client`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### to run the server`npm run server`

Runs the server in the development mode.<br>
Open [http://localhost:8000](http://localhost:8000) to see Hello World in the browser.

### to run the database`npm run db`

Runs the database in the development mode.<br>
The db is run on port 5432 inside a docker container

### To Run this project

1.  Clone the repo
2.  Install dependencies for the express server in the root

```
npm i
```

3.  Install dependencies for the react client inside the client folder

```
cd client
npm i
```

4.  Start the database:

```
npm run db
```

5.  Start the server (when the db is ready):

```
npm run server
```

6.  Start the client:

```
npm run client
```

7.  Go to [http://localhost:3000](http://localhost:3000) and enjoy the search engine;
