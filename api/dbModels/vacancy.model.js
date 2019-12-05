const mongoose = require('mongoose');

const vacancySchema = new mongoose.Schema(
    {
        employee: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'employee',
          },
          startDate: {
            type: Date,
            default: Date.now,
          },
          endDate: {
            type: Date,
            default: Date.now,
          },
          duration: {
              type: Number,
          }
    },
    { versionKey: false },
)


module.exports = mongoose.model('vacancy', vacancySchema);