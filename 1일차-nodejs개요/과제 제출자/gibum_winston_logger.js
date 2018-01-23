var winston = require('winston');

winston.log('info', 'Hello from Winston!');
winston.info('This also works');

winston.log('info','Test Log Message',{anything: 'This is metadata'});

//winston.Logger(Object options);

var logger = new(winston.Logger)({

  transports:[
    new(winston.transports.Console)(),

    new(winston.transports.File)({
      filename:'somefile.log'
    })
  ]
});

logger.log('info','Hello distributed log files!');
logger.info('Hello again distributed logs');
