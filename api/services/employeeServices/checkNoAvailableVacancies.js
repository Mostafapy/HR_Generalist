const employeeModel = require('../../dbModels/employee.model');
const logger = require('../../../utils/logger')('Services:EmployeeServices:getAllEmployeesInfo');

/**
 * function to check if there are remaining vacancies or not
 * @param {string} id 
 * @returns {Promise || Error}
 */
const checkNoAvailbleVacancies = async id => {
    try {
       const employee = await employeeModel.findById(id);
            if (employee.remainingVacancyBalance === 0) {
                return Promise.resolve(false);
            }
            return Promise.resolve(true);
    } catch (error) {
      if (error.code === 'ENOENT') {
        logger.error(
          `@checkNoAvailbleVacancies() [error: There is no template found in the database with the passed name]`,
        );
        return Promise.reject(new Error(`No Found Template`));
      }
      logger.error('@checkNoAvailbleVacancies() [error: %0]', error.message);
      return Promise.reject(err);
    }
}

module.exports = checkNoAvailbleVacancies;