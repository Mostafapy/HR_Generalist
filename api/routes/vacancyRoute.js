const express = require('express');

const addVacancyRequestValidation = require('../validations/addNewVacancyRequestValidation');

const vacancyController = require('../controllers/vacancy.controller');
const vacancyRouter = express.Router();

// [POST] api/vacancy/:employeeId
// @desc  add new vacancy to an employee
// @access Public
vacancyRouter.post('/:employeeId', addVacancyRequestValidation, vacancyController.addNewVacancyController)

module.exports = vacancyRouter;