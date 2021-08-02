const mysql= require('mysql');
const connection = mysql.createConnection({
	host:"us-cdbr-east-04.cleardb.com" ,
	user: "b58be2487761ea",
	database: "heroku_0124097ebb4b235",
	password:"b2fe26fe",
});

connection.connect((err)=>
{
	if (err) 
	{
		console.log("El error de conexion bd es: "+err)
		return;
	}
	console.log("Conectado exitosamente a la BD");
});
module.exports = connection;