const employeeModel = require('../../dbModels/employee.model');
const logger = require('../../../utils/logger')('Services:EmployeeServices:getAllEmployeesInfo');

/**
 * function to get employee info using his/her name
 * @param {String} id
 * @returns {Promise | Error}
 */
const getEmployeesInfoById = async id => {
    try {
      const employee = await employeeModel.findById(id);
      return Promise.resolve(employee);
    } catch (err) {
      if (err.code === 'ENOENT') {
        logger.error(
          `@getEmployeesInfoById() [error: There is no template found in the database with the passed name]`,
        );
        return Promise.reject(new Error(`No Found Template`));
      }
      logger.error('@getAllEmployeesInfoById() [error: %0]', err.message);
      return Promise.reject(err);
    }
  };
  

module.exports = getEmployeesInfoById;