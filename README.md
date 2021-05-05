## :rocket: Technologies

This project was developed at the [Cod3r React Native's](https://www.cod3r.com.br/courses/reactnative?ref=5b9a95) course with the following technologies:

-   [Node.js](https://nodejs.org/en/);
-   [BCrypt](https://www.npmjs.com/package/bcrypt);
-   [Consign](https://www.npmjs.com/package/consign);
-   [Cors](https://www.npmjs.com/package/cors);
-   [Express](https://expressjs.com/);
-   [Knex](https://knexjs.org/);
-   [Moment](https://momentjs.com/);
-   [Passport](http://www.passportjs.org/);
-   [JWT](https://jwt.io/);
-   [PostgreSQL](https://www.postgresql.org/);

## :information_source: How to use

```bash
    #Clone repository
    $ git clone git@github.com:codedemonbr/tasks-backend.git

    #Go into the repository
    cd yourRepositoryHere

    #Install dependencies
    yarn install
    #OR
    npm install

    #Run Project
    yarn start
    #OR
    npm start

```

## :minidisc: Database connection

You need to have PostgreSQL running. Edit the file **_knexfile.js_** as following:

```javascript
module.exports = {
    client: "postgresql",
    connection: {
        database: "tasks",
        user: "postgres",
        password: "ILoveCarol",
    },
    pool: {
        min: 2,
        max: 10,
    },
    migrations: {
        tableName: "knex_migrations",
    },
};

/**
 * Replace ILoveCarol (a tribute to my dear daughter) with your database *password.
 */
```

## :link: Testing connections

 :link: Signup User:

<p align="center">
  <img alt="Signup User" src="https://res.cloudinary.com/codedemonbr/image/upload/v1620230902/signupUser_nrhbqs.gif">
</p>

:link: Signin User:

<p align="center">
  <img alt="Signin User" src="https://res.cloudinary.com/codedemonbr/image/upload/v1620231016/signinUser_bq7xdk.gif">
</p>

:link: Post Task:

<p align="center">
  <img alt="Post Task" src="https://res.cloudinary.com/codedemonbr/image/upload/v1620231199/postTask_krbxwm.gif">
</p>

:link: Get Tasks:

<p align="center">
  <img alt="Get Tasks" src="https://res.cloudinary.com/codedemonbr/image/upload/v1620231206/getTasks_khoc8k.gif">
</p>

:link: Delete Task:

<p align="center">
  <img alt="Delete Task" src="https://res.cloudinary.com/codedemonbr/image/upload/v1620231218/deleteTask_a7ssx6.gif">
</p>


:link: Toggle Task:

<p align="center">
  <img alt="Toggle Task" src="https://res.cloudinary.com/codedemonbr/image/upload/v1620231228/toggleTask_ink4zs.gif">
</p>

## :card_index: My contacts

```json
{
    "name": "Thiago Henrique dos Santos",
    "email": "henrique.thsantos.ths@gmail.com",
    "github": "https://github.com/codedemonbr",
    "phones": [
        {
            "sp_phone": "+5511986082341"
        },
        {
            "ba_phone": "+5571997115946"
        }
    ]
}
```