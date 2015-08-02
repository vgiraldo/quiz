
var path =require('path');

var Sequelize= require('sequelize');

var  sequelize= new Sequelize(null,null,null,
	              {dialect:'sqlite',storage:'quiz.sqlite'});




var Quiz=sequelize.import(path.join(__dirname,'quiz'));

exports.Quiz=Quiz;

//inicializar la base de datos
//sequelize.sync() crea e inicializa tabla de preguntas en DB
sequelize.sync().then(function(){
	//success(..) ejecuta el manejador una vez creada la tabla
Quiz.count().then(function(count){
	if (count ===0) { //se inicializa si está vacía
		Quiz.create ({ pregunta: 'Capital de España',
					   respuesta: 'Madrid'});
		Quiz.create ({ pregunta: 'Capital de Italia',
						respuesta: 'Roma'})
		.then(function(){console.log('Base de datos inicializada')});
		};
	});
});