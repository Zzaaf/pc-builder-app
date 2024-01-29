const express = require('express');
const path = require('path');

const serverConfig = (app) => {
  app.use(express.static(path.join(__dirname, '../../client/dist')));
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
};

module.exports = serverConfig;
