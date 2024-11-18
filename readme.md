1. Если WSL - то старт с помощью `sudo service postgresql start`
2. Как проверить работоспособность: `psql`
   1. Список пользователей `\du`
   2. Список таблиц `\d`
   3. Отключиться: `exit`
3. Чтобы настроить: https://sequelize.org/docs/v6/getting-started/
   1. Установить пакеты: `npm i sequelize pg pg-hstore sequelize-cli`
   2. Создать подлкючение

```js
const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('database', 'user', 'password', {
  host: 'localhost',
  dialect: 'postgres',
});

module.exports = sequelize;
```

3.  Если нет вашего пользователя (если `psql` не работает), то введите

```js
await sequelize.query("CREATE ROLE username WITH PASSWORD '123' LOGIN SUPERUSER;");
await sequelize.query('CREATE DATABASE username OWNER username;');
await sequelize.query("CREATE ROLE admin WITH PASSWORD '123' LOGIN SUPERUSER;");
```

1. Создаём базу данных под задачу через `query`:

```js
await sequelize.query('CREATE DATABASE task-database OWNER admin;');
```
