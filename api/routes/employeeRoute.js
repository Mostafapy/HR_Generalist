const express = require('express');

const employeeRouter = express.Router();

const employeeController = require('../controllers/employee.controller');

// [Post] api/employee/checkAvaliableVacancies/:id
// @desc  check if there are remaining vacancies for that employee
// @access Public
employeeRouter.post('/checkAvaliableVacancies/:id', employeeController.checkNoAvailableVacanciesController);

// [GET] api/employees/:id
// @desc  get information about the employee with the passed id
// @access Public
employeeRouter.get('/:id', employeeController.getEmployeeInfoByIdController);

// [GET] api/employees/
// @desc  get all employees Names for drop down menu
// @access Public
employeeRouter.get('/', employeeController.getAllEmployeesNamesController);

// [GET] api/employees/info:name
// @desc  get information about the employee with the passed name
// @access Public
employeeRouter.get('/info/:name', employeeController.getAllEmployeesInfoByNameController);

module.exports = employeeRouter;