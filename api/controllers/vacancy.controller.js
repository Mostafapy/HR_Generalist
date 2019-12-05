const addNewVacancyService = require('../services/vacancyServices/addNewVacancy');
const calculateDurationService = require('../services/vacancyServices/calculateDurationOfVacancy');
const reduceVacancyChancesService = require('../services/employeeServices/reduceEmployeeVacationChances');
const logger = require('../../utils/logger')('Controllers:VacancyController');

const addNewVacancyController = async (req, res) => {
    try {
        const {startDate, endDate} = req.body;

        const duration = calculateDurationService(startDate, endDate);

        const vacancyObj = {
            startDate,
            endDate,
            duration,
        }

        await addNewVacancyService(req.params.employeeId, vacancyObj);

        await reduceVacancyChancesService(req.params.employeeId);

        return res.json({
            err: null,
            msg: 'Successfully One Vacancy added for the Selected Employee',
            data: null,
        })
    } catch (err) {
        if (err.message === `No Found Template`) {
            return res.status(404).send('No Found Employee with this id');
        }
        logger.error('@addNewVacancy() [error: %0]', err.message);

        return res.status(500).send('Server Error');
    }
}


module.exports = {
    addNewVacancyController,
};