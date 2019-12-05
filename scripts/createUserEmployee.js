require('../api/dbModels/employee.model');
const questions = require('questions');
const mongoose = require('mongoose');
const mongoDBConfig = require('config').get('mongoDB');

(async function Main() {
  try {
    const dbUri = mongoDBConfig.uri;
    mongoose.set('useCreateIndex', true);

    await mongoose
      .connect(
        dbUri,
        {
          useNewUrlParser: true,
          reconnectTries: Number.MAX_VALUE,
        },
      )
      .catch(err => {
        console.error(err);
        process.exit(0);
      });

    const employeeModel = mongoose.model('employee');

    questions.askMany(
      {
        name: { info: 'User Name [String]' },
        totalVacancyBalance: { info: 'Total Vacation Balance [Number]' },
        remainingVacancyBalance: { info: 'Remaining Vacation Balance [Number]' },
      },
      async result => {
        const employee = await employeeModel.create(result);
        console.log('\x1b[36m%s\x1b[0m', `Created User : ${employee._id}`);
      },
    );
  } catch (err) {
    throw err;
  }
})();
