const  mysql = require('mysql');

const dbConfig ={
	host: 'localhost',
	user: 'kinakone',
	password : 'kinakone123',
	database : 'kinakonedb'
};

const pool = mysql.createPool(dbConfig);

module.exports =pool;
