const getEmployeeInfoByIdService = require('../services/employeeServices/getEmployeeInfoById');
const getAllEmployeeInfoByNameService = require('../services/employeeServices/getAllEmployeesInfo');
const checkNoAvailableVacanciesService = require('../services/employeeServices/checkNoAvailableVacancies');
const getAllEmployeesNamesService = require('../services/employeeServices/getAllEmployeesNames');
const logger = require('../../utils/logger')('Controller:EmployeeController');

const checkNoAvailableVacanciesController = async(req, res) => {
    try {
        const flag = await checkNoAvailableVacanciesService(req.params.id);
       
        return res.json({ 
            err: null,
            msg: 'Vacancies Remaining checked',
            data: {isRemainingVacancies: flag}
        });
    } catch (error) {
        logger.error('@checkNoAvailableVacanciesController() [error: %0]', error.message);
        return res.status(500).send('Server Error');
    }
}

const getEmployeeInfoByIdController = async(req, res) => {
    try {
        const employee = await getEmployeeInfoByIdService(req.params.id);

        return res.json({
            err: null,
            msg: 'Successfully retieved the required employee',
            data: employee,
        });
    } catch (error) {
        if (error.kind === 'ObjectId') {
            return res.status(400).json({
              err: null,
              msg: 'vacancy is not found',
              data: null,
            });
          }
        logger.error('@getEmployeeInfoByIdController() [error: %0]', error.message);
        return res.status(500).send('Server Error');
    }
}

const getAllEmployeesNamesController = async(_req, res) => {
    try {
        const employeesNames = await getAllEmployeesNamesService();

        return res.json({
            err: null,
            msg: 'Successfully Retrieved All employees Names',
            data: employeesNames,
        })
    } catch (error) {
        logger.error('@getAllEmployeesNamesController() [error: %0]', error.message);
        return res.status(500).send('Server Error');
    }
}

const getAllEmployeesInfoByNameController = async (req, res) => {
    try {
        const employee = await getAllEmployeeInfoByNameService(req.params.name);
      
        return res.json({
            err: null,
            msg: 'Successfully retieved the required employee',
            data: employee,
        });
    } catch (error) {
        logger.error('@getAllEmployeesInfoByNameController() [error: %0]', error.message);
        return res.status(500).send('Server Error');
    }
}
module.exports = {
    checkNoAvailableVacanciesController,
    getEmployeeInfoByIdController,
    getAllEmployeesNamesController,
    getAllEmployeesInfoByNameController,
};