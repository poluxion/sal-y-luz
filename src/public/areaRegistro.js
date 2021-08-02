var nombres = []
var correos = []
var cedulas = []
var fechaNacimientos = []
var contrasenas = []

function compararContra()
{
var elementoContra = document.getElementById('pessw')
var valorContra =elementoContra.value
var elementoContra2 = document.getElementById('r_pessw')
var valorContra2 =elementoContra2.value
if (valorContra2 == valorContra)
{
	return true
}
else
	{
		
		alert("Las contraseñas no son iguales")
		return false
	}
}

function compararCorreo()
{
	var elementoCorreo = document.getElementById('e_mail')
	var valorCorreo = elementoCorreo.value
	var elementoCorreo2 = document.getElementById('e_mailRe')
	var valorCorreo2 = elementoCorreo2.value
	if (valorCorreo == valorCorreo2)
	{
		
		return true
	}
	else
	{
		alert("no es un correo valido")
		return false
	}
}
function correoValido()
{
	var elementoCorreo = document.getElementById('e_mail')
	var valorCorreo = elementoCorreo.value
	var elementoCorreo2 = document.getElementById('e_mailRe')
	var valorCorreo2 = elementoCorreo2.value

	if (valorCorreo.indexOf(".") == -1)
	{
		alert("no es un correo valido")
		return false
	}
	else if (valorCorreo.indexOf(" ") != -1)
	{
		alert("no es un correo valido")
		return false
	}
	else if (valorCorreo.indexOf("@") == -1)
	{
		alert("no es un correo valido")
		return false
	}
	else  
	{
		let inicio = valorCorreo.indexOf("@")
		if (inicio < 3)
		{
			alert("no es un correo valido")
			return false
		}
		else
		{
			let indicadora = false
			for (let i = inicio;i < valorCorreo.length -2;i++)
			{
				if (valorCorreo[i] == ".")
				{
					indicadora = true
				}
			}
			return indicadora
		}
	}
}
function verificarCedula()
{
	var cedula = document.getElementById('cedula')
	if (cedulas.includes(cedula.value))
	{
		alert("La cedula ya existe")
		return false
	}
	else
	{
		return true
	}
}

function verificarCorreo()
{
	var correo = document.getElementById('e_mail')
	if (correos.includes(correo.value))
	{
		alert("El correo ya existe")
		return false
	}
	else
	{
		return true
	}
}
function guardarInfo()
{
	var nombre = document.getElementById('name_user')
	var contrasena = document.getElementById('pessw')
	var confirmaContra = document.getElementById('r_pessw')
	var correo = document.getElementById('e_mail')
	var reCorreo = document.getElementById('e_mailRe')
	var fechaNacimiento = document.getElementById('fecha_naci')
	var cedula = document.getElementById('cedula')
	if (compararContra() && correoValido() && compararCorreo() && verificarCedula() && verificarCorreo())
	{
		nombres.push(nombre.value)		
		contrasenas.push(contrasena.value)	
		correos.push(correo.value)		
		fechaNacimientos.push(fechaNacimiento.value)
		cedulas.push(cedula.value)
	}

	var bd = [nombres, contrasenas,correos, fechaNacimientos,cedulas]
	console.log(bd)
}