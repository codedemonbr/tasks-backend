<h1 align="center">
    Tasks - Backend
</h1>
<p align="center">
  <img alt="GitHub top language" src="https://img.shields.io/github/languages/top/codedemonbr/tasks-backend">

  <img alt="GitHub language count" src="https://img.shields.io/github/languages/count/codedemonbr/tasks-backend">

  <a href="https://www.codacy.com/gh/codedemonbr/tasks-backend/dashboard?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=codedemonbr/tasks-backend&amp;utm_campaign=Badge_Grade">
    <img src="https://app.codacy.com/project/badge/Grade/1f8b30a499ce412f98fa085a579998f5"/>
  </a>

  <img alt="Repository size" src="https://img.shields.io/github/repo-size/codedemonbr/tasks-backend">

  <a href="https://github.com/codedemonbr/tasks-backend/commits/master">
    <img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/codedemonbr/tasks-backend">
  </a>

  <a href="https://github.com/codedemonbr/tasks-backend/issues">
    <img alt="Repository issues" src="https://img.shields.io/github/issues/codedemonbr/tasks-backend">
  </a>

  <img alt="License" src="https://img.shields.io/github/license/codedemonbr/tasks-backend">
</p>

<!-- Index -->

<p align="center">
  <a href="#rocket-technologies">Technologies</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#information_source-how-to-use">How To Use</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#minidisc-database-connection">Database Connection</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#link-testing-connections">Testing Connections</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#card_index-my-contacts">My Contacts</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#memo-License">License</a>
</p>

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

First of all create a **_.env_** file in your root directory.  
As model below:

```javascript
module.exports = {
    authSecret: "insert here your key, something like : !@#$1234&%$425!@$*&",
};
```

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

Use [Node.js v14.15][nodejs] or higher.

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
    "linkedin": "www.linkedin.com/in/codedemonbr",
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

## :memo: License

This project is under the MIT license. See the [LICENSE](https://github.com/codedemonbr/tasks-backend/blob/master/LICENSE) for more information.

---

Made with inner :fire: by Thiago Henrique dos Santos :wave: [Get in touch!](www.linkedin.com/in/codedemonbr)

[nodejs]: https://nodejs.org/
