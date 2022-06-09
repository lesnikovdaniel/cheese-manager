const express = require('express');
const AdminBro = require('admin-bro')
const AdminBroExpress = require('admin-bro-expressjs')
const PORT = 3000;
const app = express();
const db = require('./models');
const AdminJSSequelize = require('@adminjs/sequelize')
AdminBro.registerAdapter(AdminJSSequelize);

const adminBro = new AdminBro({
  databases: [db],
  rootPath: '/admin',
  logoutPath: '/logout',
  loginPath: '/login',
});


const router = AdminBroExpress.buildRouter(adminBro)
app.use(adminBro.options.rootPath, router);
app.listen(PORT, () => {
  console.log(`Server is listening on port: ${PORT}`);
});

module.exports = app;
