# moneyxchange
demo de backend que convierte dolares a euros

requiere de una base de datos mongodb en el puerto 27017, con una colección llamada "rates".

Usar "npm start" para correr la aplicación. Cada 10 minutos consulta un endpoint que contiene información del tipo de cambio de USD a EUR.

Endpoint disponible: POST http://localhost:3000/currency/convertToEuro
{
	"amount": 30,
	"symbol": "USD"
}

npm test para correr la prueba.

***

Requires a mongodb database running on port 27017, with a "rates" collection.

Use "npm start" to start the server.

Use "npm test" to run he test.