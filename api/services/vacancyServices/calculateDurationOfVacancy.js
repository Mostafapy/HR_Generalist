/**
 * function to calculate the duration of the vacancy
 * @param {Date} startDate
 * @param {Date} endDate
 * @returns {Number}
 */
const calculateDurationOfVacancy = (startDate, endDate) => {
    
  const start = new Date(startDate);

  const end = new Date(endDate);

  let weeks = 0;
  let dateDiff = 0;
  let adjust = 0;

  if (end < start) return -1;
  let startDay = start.getDay();
  let endDay = end.getDay();
  startDay = (startDay == 0) ? 7 : startDay;
  endDay = (endDay == 0) ? 7 : endDay;

  if ((startDay > 5) && (endDay > 5)) adjust = 1;
  startDay = (startDay > 5) ? 5 : startDay; 
  endDay = (endDay > 5) ? 5 : endDay;


  weeks = Math.floor((end.getTime() - start.getTime()) / 604800000)
  if (startDay < endDay) {
    dateDiff = (weeks * 5) + (startDay - endDay)
  } else {
    dateDiff = ((weeks + 1) * 5) - (startDay - endDay)
  }

  dateDiff -= adjust // take into account both days on weekend

  return (dateDiff + 1); 

}

module.exports = calculateDurationOfVacancy;