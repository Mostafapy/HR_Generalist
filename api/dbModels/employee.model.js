const mongoose =  require('mongoose');

const employeeSchema = new mongoose.Schema(
    {
        name: {
            type: String,
        },
        totalVacancyBalance: {
            type: Number,
        },
        remainingVacancyBalance: {
            type: Number,
        },
        vacancies: [{
            type: mongoose.Schema.Types.ObjectId,
            ref: 'vacancy',
        }]
    },
    {versionKey: false}
)

module.exports = mongoose.model('employee', employeeSchema);