const Vacancy = require('../../dbModels/vacancy.model');
const logger = require('../../../utils/logger')('Services:VacancyServices:reduceEmployeeVacationChances');

/**
 * function to create new vacancy for the requested employee
 * @param {String} employeeId
 * @param {Object} vacancyInfo
 * @returns {Promise | Error}
 */
const addNewVacancy = async (employeeId, vacancyInfo) => {
    try {
      const vacancy = new Vacancy({
        startDate: vacancyInfo.startDate,
        endDate: vacancyInfo.endDate,
        duration: vacancyInfo.duration,
        employee: employeeId,
      });
  
      await vacancy.save();
      return Promise.resolve();
    } catch (err) {
      logger.error('@addNewVacancy() [error: %0]', err.message);
  
      return Promise.reject(new Error('Cannot create new vacancy for this employee'));
    }
  };

module.exports = addNewVacancy;