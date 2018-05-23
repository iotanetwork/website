# [IEN Website](https://ien.io)

## DB Setup

- Download and install Postgres 10
- Use ani as password
- Open pgAdmin and create database with name "ien"
- Close pgAdmin and open your terminal/cmd
- cd to the folder where psql is installed on your machine OR setup a path to psql

```
psql -U postgres
(psql#) ien < https://s3.amazonaws.com/iota-ien/ien_dump
```

(if you have trouble with the last step then ask in the telegram app)

- Open pgAdmin, browse to the tables under ien db, now you should see 2 tables.
- Right-click on member table and choose "Show data/rows", you should see 94 members.
- Now your db is ready.

## Project Setup

- Install npm and Node.js if you haven't already.
- Open terminal/cmd and browse to a location where you want to save the project (for instance a folder "ien" in your user directory)

```
git clone <project_url>
cd website
npm install
npm run migrate
```

- Create environment file inside the project (.env) with the content NODE_ENV=development

## Run the website 

`npm start`

(Alternatively you may install nodemon globally with `npm i -g nodemon`, you don't have to restart the server every time you write some code and want to test it)

- Go to your favorite browser and open http://localhost:3000/ to view our website in action.
- Check for issues on github and have fun!:)
