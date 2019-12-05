const Joi = require('joi');

const addNewVacancySchema = Joi.object()
  .required()
  .keys({
    startDate: Joi.date().required(),
    endDate: Joi.date().required()
  });

const addNewVacancyRequestValidation = (req, res, next) => {
  const validatedBody = Joi.validate(req.body, addNewVacancySchema);

  if (validatedBody.error !== null) {
    const error = validatedBody.error.details[0];

    const errStr = `${error.message}, (error path): ${error.path.join('.')}`;

    return res.status(400).json({ errors: [errStr] });
  }

  return next();
};

module.exports = addNewVacancyRequestValidation;