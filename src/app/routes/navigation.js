const connection = require("../../config/db");
const bcryptjs = require('bcryptjs');


module.exports = app => {
	app.get('/', (req,res)=> {
		if (req.session.loggedin) {
			res.render('../views/index.ejs', {
				inicioSesion:true,
				name_user: req.session.Nombre,
				rol_user: req.session.Rol

			});
		} else {
			res.render('../views/index.ejs', {
				inicioSesion: true,
				name_user: req.session.Nombre,
				rol_user: req.session.Rol
			});
		}
	})
	
	app.post('/auth', async (req, res)=> {
		const {cedula,pessw} = req.body;
		let passwordHaash = await bcryptjs.hash(pessw, 8);

		if (cedula && pessw){
			connection.query('SELECT * FROM persona WHERE Cedula = ?',[cedula], async(err, results) => {
			console.log(results);
				if (results.length === 0 || !(await bcryptjs.compare(pessw,results[0].Contrasena))){
					res.render('../views/inicioSesion.ejs', {
						alert:true,
						alertTitle:"Error",
						alertMessage:"Usuario y/o password incorrectas",
						alertIcon: "error",
						showConfirmButton: true,
						timer: 3000,
						ruta: 'inicioSesion'
					});
					} else if (cedula === "1234567") {
						req.session.loggedin = true;
						req.session.Nombre = results[0].Nombre;
						req.session.Cedula = results[0].Cedula;
						req.session.Rol = results[0].Rol;
						req.session.idEvento = results[0].idEvento;
						res.render('../views/inicioSesion.ejs', {
							alert:true,
							alertTitle:"Conexion exitosa",
							alertMessage:"Login Correcto",
							alertIcon: "success",
							showConfirmButton: false,
							timer: 3000,
							ruta: 'asistencia'
						});
					} 
					else {
						req.session.loggedin = true;
						req.session.Nombre = results[0].Nombre;
						req.session.Cedula = results[0].Cedula;
						req.session.Rol = results[0].Rol;
						req.session.idEvento = results[0].idEvento;
						res.render('../views/inicioSesion.ejs', {
						alert:true,
						alertTitle:"Conexion exitosa",
						alertMessage:"Login Correcto",
						alertIcon: "success",
						showConfirmButton: false,
						timer: 3000,
						ruta: ''
					})

				}
			})	
		}			
	})
	app.get('/index',(req,res)=>{
		res.render('../views/index.ejs')
	})
	app.get('/inicioSesion',(req,res)=>{
		res.render('../views/inicioSesion.ejs')
	})
	app.get('/areaRegistro', (req,res)=> {
		res.render('../views/areaRegistro.ejs');
	})
	
	app.get('/eventos', (req,res) =>{
		if (req.session.loggedin){
			res.render('../views/eventos.ejs', {
				inicioSesion:true,
			});
		} else {
			res.render('../views/inicioSesion.ejs', {
				inicioSesion:false,
				name_user:"Inicié sesion para ver los eventos"
			})
		}
	})

	app.get('/logout', (req,res) =>{
		req.session.destroy(() => {
			res.redirect('/');
		})
	})
	app.get("/contemos", (req,res)=>{
		connection.query("SELECT * FROM evento WHERE nombreEvento = 'Laboratorios de comunicaciones - CONTEMOS LA 13' ", (err,result)=>{
			res.render('../views/contemos.ejs', {
				evento:result,
				inicioSesion:true,
				rol_user: req.session.Rol
			})
		});
	})
	app.get("/economica", (req,res)=>{
		connection.query("SELECT * FROM evento WHERE nombreEvento = 'Autonomía económica' ", (err,result)=>{
			res.render('../views/economica.ejs', {
				evento:result,
				inicioSesion:true,
				rol_user: req.session.Rol
			})
		});
	})
	app.get("/lideres", (req,res)=>{
		connection.query("SELECT * FROM evento WHERE nombreEvento = 'Red de Lideres Escolares' ", (err,result)=>{
			res.render('../views/lideres.ejs', {
				evento:result,
				inicioSesion:true,
				rol_user: req.session.Rol
			})
		});
	})	
	app.get("/semillero", (req,res)=>{
		connection.query("SELECT * FROM evento WHERE nombreEvento = 'Semillero de Impacto Social' ", (err,result)=>{
			res.render('../views/semillero.ejs', {
				evento:result,
				inicioSesion:true,
				rol_user: req.session.Rol
			})
		});
	})	
	app.get("/participacion", (req,res)=>{
		connection.query("SELECT * FROM evento WHERE nombreEvento = 'Laboratorios infantiles de Participación' ", (err,result)=>{
			res.render('../views/participacion.ejs', {
				evento:result,
				inicioSesion:true,
				rol_user: req.session.Rol
			})
		});
	})

	app.get("/vida", (req,res)=>{
		connection.query("SELECT * FROM evento WHERE nombreEvento = 'Festival de fiesta a la vida' ", (err,result)=>{
			res.render('../views/vida.ejs', {
				evento:result,
				inicioSesion:true,
				rol_user: req.session.Rol
			})
		});
	})

	app.get("/padres", (req,res)=>{
		connection.query("SELECT * FROM evento WHERE nombreEvento = 'Escuela Virtual de Padres' ", (err,result)=>{
			res.render('../views/padres.ejs', {
				evento:result,
				inicioSesion:true,
				rol_user: req.session.Rol
			})
		});
	})

	app.get("/registroEvento/:evento/:id", (req,res)=>{
		let idEvento = req.params.id;
		let cedula = req.session.Cedula;
		let nombrePersona = req.session.Nombre;
		let nombreEvento = req.params.evento;
		let asistencia = 0;
		connection.query("INSERT INTO asistencia SET ?",{
			idEvento,
			cedula,
			nombreEvento,
			nombrePersona,
			asistencia
		}, (error,result,rep) => {
			if(error){
				res.render('../views/contemos.ejs',{
					inicioSesion:false,
					evento:result,
					rol_user:req.session.Rol,
					alert:true,
					alertTitle:"Error al registrar al evento",
					alertMessage :"Imposible registrar/Usuario repetido",
					alertIcon :"error",
					showConfirmButton:false,
					timer:3000,
					ruta:''
				});
			} else if (cedula) {
				connection.query('SELECT * FROM asistencia WHERE cedula = ?',)
					if (results[0].cedula === cedula) {
						res.render('../views/contemos.ejs',{
							inicioSesion:false,
							evento:result,
							cedula:req.session.Cedula,
							alert:true,
							alertTitle:"Error al registrar al evento",
							alertMessage :"Imposible registrar/Usuario repetido",
							alertIcon :"error",
							showConfirmButton:false,
							timer:3000,
							ruta:''
						})				
					}
				
			} else {
				res.render('../views/contemos.ejs', {
					inicioSesion:true,
					evento:result,
					rol_user:req.session.Rol,
					alert:true,
					alertTitle:"Registration",
					alertMessage :"Successful Registration",
					alertIcon :"success",
					showConfirmButton:false,
					timer:3000,
					ruta:''
				});
			}
		})
	})

	app.get('/inicioSesion', (req,res)=> {
		res.render('../views/inicioSesion.ejs');
	})

	app.get("/list", (req,res) => {
		connection.query("SELECT * FROM evento", (err,result) => {
			if (req.session.loggedin) {
				res.render('../views/list.ejs',{
					inicioSesion:true,
					evento:result,
					rol_user: req.session.Rol
				});
			}else{
				res.render('../views/inicioSesion.ejs', {
					inicioSesion:false,
					evento:result
				});
			}
		})
	})
	app.post('/areaRegistro',async(req,res)=>{
		const {name_user,e_mail,fecha_naci,cedula,pessw,rol} = req.body;
		console.log(req.body);
		let passwordHash = await bcryptjs.hash(pessw,8);
		connection.query("INSERT INTO persona SET ?", {
			Nombre:name_user,
			Correo:e_mail,
			FechaDeNacimiento:fecha_naci,
			Cedula:cedula,
			Rol:"Usuario",
			Contrasena:passwordHash
			
		}, async(error,result)=>{
			if (error) {
				res.render('../views/areaRegistro.ejs', {
					alert: true,
					alertTitle: "Error al registrar el usuario",
					alertMessage : "Imposible registrar/Usuario repetido",
					alertIcon : "error",
					showConfirmButton: false,
					timer: 3000,
					ruta:''
				});
			}else{
				res.render('../views/areaRegistro.ejs', {
					alert: true,
					alertTitle: "Registration",
					alertMessage : "Successful Registration",
					alertIcon : "success",
					showConfirmButton: false,
					timer: 3000,
					ruta:''
				});
			}
		})
	})

	app.post('/eventos',async(req,res)=>{
		const {event_name, iniDate, finDate, iniTime, finTime,cupos} = req.body;		
		console.log(req.body);

		connection.query("INSERT INTO evento SET ?", {
			nombreEvento:event_name,
			fechaEventoIni: iniDate,
			fechaEventoFin:finDate,
			horaIni:iniTime,
			horaFin:finTime,
			cupos:cupos
		}, async(error,result)=>{
			if (error) {

				res.render('../views/eventos.ejs', {
					inicioSesion:false,
					alert: true,
					alertTitle: "Error al registrar el evento",
					alertMessage : "Error al registrar evento",
					alertIcon : "error",
					showConfirmButton: false,
					timer: 3500,
					ruta:''
				});
			}else{
				res.render('../views/eventos.ejs', {
					inicioSesion:true,
					alert: true,
					alertTitle: "Registration",
					alertMessage : "Successful Registration",
					alertIcon : "success",
					showConfirmButton: false,
					timer: 3500,
					ruta:'list'
				});
			}
		})
	})

	app.get('/edit/:idE',(req,res)=>{
		const {idE} = req.params;
		connection.query("SELECT * FROM evento WHERE idEvento = ?",[idE], (err,result) => {
			res.render('../views/editarEvento.ejs',  { 
				evento: result
			})
		})
	})

	app.post('/edit/:idE', async (req, res)=>{
		const {idE} = req.params;
		const {event_name, iniDate, finDate, iniTime, finTime,cupos} = req.body;
		const newEvent = {
			nombreEvento:event_name,
			fechaEventoIni: iniDate,
			fechaEventoFin:finDate,
			horaIni:iniTime,
			horaFin:finTime,
			cupos:cupos
		};
		await connection.query('UPDATE evento SET ? WHERE idEvento = ?', [newEvent,idE]);
		res.redirect('/list')
	})

	app.get('/delete/:idE', async(req,res)=> {
		const {idE} = req.params;
		await connection.query("DELETE FROM evento WHERE idEvento = ?", [idE]);
		res.redirect("/list")
	})

	app.get('/asistencia', (req,res) => {
		connection.query('SELECT * FROM evento', (err,result) => {
			if (req.session.loggedin) {
				res.render('../views/asistencia.ejs', {
					inicioSesion:true,
					asistente:result,
					rol_user:req.session.Rol
				});
			} else {
				res.render('../views/inicioSesion.ejs', {
					inicioSesion:false,
					asistente:result					
				});
			}
		})
	})

	app.post('/registroAsistencia',  (req, res)=> {
		const {cedula,idEvento} = req.body;

		if (cedula && idEvento){
			connection.query('SELECT * FROM asistencia WHERE cedula = ? AND idEvento = ?',[cedula,idEvento], (err,result) => {
				if (result.length === 0 && result.idEvento === 0){ 
					res.render('../views/asistencia.ejs', { 
						inicioSesion:true,
						asistente:result,
						rol_user:req.session.Rol,
						alert:true,
						alertTitle:"Error",
						alertMessage:"Error al registrar al evento/Ya estas registrado",
						alertIcon: "error",
						showConfirmButton: true,
						timer: 3000,
						ruta: 'asistencia'
					});					
				} else if (result.cedula === cedula || result.asistencia === "1") {
							res.render('../views/asistencia.ejs', { 
							inicioSesion:true,
							asistente:result,
							rol_user:req.session.Rol,
							alert:true,
							alertTitle:"Error",
							alertMessage:"Error al registrar al evento/Ya estas registrado",
							alertIcon:"error",
							showConfirmButton:true,
							timer:3000,
							ruta:'asistencia'
							});
						} else {
								connection.query('UPDATE asistencia SET asistencia = 1 WHERE cedula = ? AND idEvento = ? AND asistencia = 0',[cedula,idEvento], (err,results) => {
								res.render('../views/asistencia.ejs', {
								inicioSesion:true,
								asistente:result,
								rol_user:req.session.Rol,
								alert:true,
								alertTitle:"Asistente verficado!",
								alertMessage:"Registro exitoso!",
								alertIcon: "success",
								showConfirmButton: false,
								timer: 3000,
								ruta: 'asistencia'
						})
					});			
				}
			})	
		}			
	})
}
