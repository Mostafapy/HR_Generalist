module.exports = {
    app: {
      name: 'HR Generalist',
      port: '5000',
      nodeEnv: 'development',
    },
    mongoDB: {
      uri:
        'mongodb://localhost:27017/employee_vacation',
    },
    jwt: {
      secret: 'employeesecrettoken',
    },
  };