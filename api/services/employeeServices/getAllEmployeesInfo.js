const employeeModel = require('../../dbModels/employee.model');
const logger = require('../../../utils/logger')('Services:EmployeeServices:getAllEmployeesInfo');

/**
 * function to get employee info using his/her name
 * @param {String} name
 * @returns {Promise | Error}
 */
const getAllEmployeesInfo = async name => {
    try {
      const employee = await employeeModel.findOne({ name });
      return Promise.resolve(employee);
    } catch (err) {
      logger.error('@getAllEmployeesInfo() [error: %0]', err.message);
      return Promise.reject(err);
    }
  };
  
module.exports = getAllEmployeesInfo;