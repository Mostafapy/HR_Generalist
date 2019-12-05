const employeeModel = require('../../dbModels/employee.model');
const getAllEmployeesInfoById = require('./getEmployeeInfoById');
const logger = require('../../../utils/logger')('Services:EmployeeServices:getAllEmployeesInfo');

/**
 * function to reduce remaining vacances for employee one a new vacancy is establised
 * @param {string} id 
 * @returns {Promise || Error}
 */
const reduceEmployeeVacationChances = async id => {
    try {
       const employee = await getAllEmployeesInfoById(id);

       employee.remainingVacancyBalance -=1;

       await employee.save();

       return Promise.resolve();
    } catch (err) {
      if (err.message === `No Found Template`) {
        return Promise.reject(new Error(`No Found Template`)); 
      }
      logger.error('@reduceEmployeeVacationChances() [error: %0]', err.message);
      return Promise.reject(err);
    }
}

module.exports = reduceEmployeeVacationChances;