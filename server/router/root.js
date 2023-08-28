const express = require('express');
const { fullInfoRouter } = require('./info');
const { tasksRouter } = require('./tasks');
const { contactInfoRouter } = require('./contact-info');
const { warehousesRouter } = require('./warehouses');
const { operatingAccountRouter } = require('./operating-account');
const { legalFormsRouter } = require('./legal-forms');
const { statkeyRouter } = require('./stat-key');
const { i18nRouter } = require('./i18n');

const rootRouter = express.Router();

rootRouter.use('/tasks', tasksRouter);
rootRouter.use('/info', fullInfoRouter);
rootRouter.use('/contact-info', contactInfoRouter);
rootRouter.use('/warehouses', warehousesRouter);
rootRouter.use('/supplier-info', operatingAccountRouter);
rootRouter.use('/I18N', i18nRouter);
rootRouter.use('/legal-forms', legalFormsRouter);
rootRouter.use('/statkey', statkeyRouter);

module.exports.rootRouter = rootRouter;
