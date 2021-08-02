const request = require("supertest");
const server = require("../../src/index");

describe("Pruebas de server: ", () => {
	//Probar rutas "/"
	describe("Metodo get ruta '/' ", () =>{
		it("Ingreso pagina, deberia retornar 200", (done) =>{
			request(server).get("/")
			.expect(200)
			.end( (err) => err ? done.fail(err): done () );
		})
	})
})