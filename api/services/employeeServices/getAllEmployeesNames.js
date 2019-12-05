const employeeModel = require('../../dbModels/employee.model');
const logger = require('../../../utils/logger')('Services:EmployeeServices:getAllEmployeesNames');

/**
 * function to get all employees his/her name and use it on the dropdown
 * @returns {Promise | Error}
 */
const getAllEmployeesNames = async () => {
    try {
      const employees = await employeeModel.find({});
      const employeesNames = [];
      employees.forEach(employee => {
          employeesNames.push(employee.name);
      })
      return Promise.resolve(employeesNames);
    } catch (err) {
      logger.error('@getAllEmployeesNames() [error: %0]', err.message);
      return Promise.reject(
        new Error('Cannot complete finding the requested employee in mongoDB'),
      );
    }
  };

module.exports = getAllEmployeesNames;