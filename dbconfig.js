const config = {
    user: 'Accenture',
    password: 'acc_pass@123',
    database: 'Accenture',
    server: '160.119.252.198',
    pool: {
      max: 10,
      min: 0,
      idleTimeoutMillis: 30000
    },
    options: {
      encrypt: false,
      trustServerCertificate: true
    }
  }

module.exports = config; 