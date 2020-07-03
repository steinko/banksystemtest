var winston = require('winston')
var {ElasticsearchTransport} = require('winston-elasticsearch')
  var instance = null
  var logger
  var esTransportOpts = {
  level: 'info' ,
  clientOpts: { node: 'http://localhost:9200' },
  index:'bank-systemtest'
}

class Logger { 

   constructor() {
        logger = winston.createLogger({
           transports: [
               new ElasticsearchTransport(esTransportOpts)
          ]
       })
    }

	 static getLogger() { 
     if (instance == null)  { 
        instance =  new Logger()
      }
     return logger
   }
 } 
export default Logger