const router = require('express').Router();
const apiRouters = require('express').Router();
// Routers
const vacancyRoute = require('./vacancyRoute');
const employeeRoute = require('./employeeRoute');


// Routes
router.use('/api', apiRouters);
apiRouters.use('/employees', employeeRoute);
apiRouters.use('/vacancy', vacancyRoute);


module.exports = router;