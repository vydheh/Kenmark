const dbConnection = require('./dbConnection')


const relationship = async () =>{
try {
    await dbConnection.sync();
      console.log('sync');
  } catch (error) {
      console.log(error);

  }
}

module.exports = relationship();