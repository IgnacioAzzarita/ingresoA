/*
1)De 5  personas que ingresan al hospital se deben tomar y
validar los siguientes datos.
nombre , temperatura, sexo y edad.
a)informar la cantidad de personas de cada sexo.
b)la edad promedio en total
c)la mujer con más temperatura(si la hay)
pedir datos por prompt y mostrar por document.write o console.log
*/
function mostrar()
{
	let nombre;
	let temperatura;
	let sexo;
	let edad;
	let contadorVaron=0;
	let contadorMujer=0;
	let promedioEdad;
	let acumEdad=0;
	let mujerTemperaturaMasAlta;
	let nombreMujerAltaTemperatura;
	let flagMujerTemperatura=0;

	for(let i=0;i<5;i++){
nombre=prompt("Ingrese nombre del paciente");
temperatura=parseFloat(prompt("Ingrese la temperatura corporal del paciente"));
while(temperatura<33 || temperatura>42){
	temperatura=parseFloat(prompt("Temperatura invalida! Ingrese un número entre 33 y 42"));
}
sexo=prompt("Ingrese F si es mujer o M si es varón").toLowerCase();
while(sexo!="f" && sexo!="m"){
	sexo=prompt("Letra invalida! Ingrese F si es mujer o M si es varón").toLowerCase();
}
edad=parseInt(prompt("Ingrese la edad del paciente"));
while(edad<1 || edad>110){
	edad=parseInt(prompt("Edad invalida! Ingrese una edad entre 1 y 110 años"));
}
acumEdad+=edad;
switch(sexo){
	case "m":
		contadorVaron++;
		break;
	case "f":
		contadorMujer++;
		if(flagMujerTemperatura==0 || temperatura>mujerTemperaturaMasAlta){
			mujerTemperaturaMasAlta=temperatura;
			nombreMujerAltaTemperatura=nombre;
			flagMujerTemperatura=1;
		}
        break;
}
}
if(flagMujerTemperatura==0){
	nombreMujerAltaTemperatura="No ingreso ninguna paciente mujer";
	mujerTemperaturaMasAlta="No ingreso ninguna paciente mujer";
}
promedioEdad=acumEdad/5;
console.log("A- La cantidad de varones es "+contadorVaron+" y la cantidad de mujeres es "+contadorMujer);
console.log("B- EL promedio de la edad es "+promedioEdad);
console.log("C- La mujer con temperatura más alta se llama "+nombreMujerAltaTemperatura+" y su temperatura es de "+mujerTemperaturaMasAlta+" grados");
}
