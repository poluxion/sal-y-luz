const mysql= require('mysql');

const conexion_bd = {
	host:"us-cdbr-east-04.cleardb.com",
	user:"b58be2487761ea",
	database:"heroku_0124097ebb4b235",
	password:"b2fe26fe"
};


function handleDisconnect(conexion_bd) {
	connection = mysql.createPool(conexion_bd);

	connection.getConnection(function(err){
		if (err) {
			console.log('error al conectarse a la bd: ', err);
			setTimeout(handleDisconnect, 2000);
		}
	});

	connection.on('error', function(err) {
		console.log('error en la db', err);
		if (err.code === 'PROTOCOL_CONNECTION_LOST') {
			handleDisconnect();
		} else {
			throw err;
		}
	});
}

handleDisconnect(conexion_bd);
module.exports = connection;