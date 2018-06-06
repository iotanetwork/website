# [IEN Website](https://ien.io)

## DB Setup

- Download and install Postgres 10
- Set a password of your choice. You can also leave it blank.
- Open pgAdmin (if you need a UI) or open psql on terminal and create database with name "ien" `create database ien`

## Project Setup

- Install npm and Node.js if you haven't already.
- Open terminal/cmd and browse to a location where you want to save the project (for instance a folder "ien" in your user directory)

```
git clone <project_url>
cd website
npm install
npm run migrate
```

- Create environment file inside the project (.env) with the content. These are optional and if not provided, the setup will still work.

```
PORT=3000
NODE_ENV=development
DB_PASSWORD=password
```

You can now populate the db yourself or alternatively, here's a snapshot of the db that you can use:
```
psql -U postgres
(psql#) ien < https://s3.amazonaws.com/iota-ien/ien_dump.sql
```
(if you have trouble with the last step then ask in the telegram group for help)

## Run the website

`npm start`

(Alternatively you may install nodemon globally with `npm i -g nodemon`, you don't have to restart the server every time you write some code and want to test it)

- Go to your favorite browser and open http://localhost:3000/ to view our website in action.
- Check for [issues on github](https://github.com/iotanetwork/website/issues) and have fun!:)
