/*
3)Nos ingresan una cantidad indeterminada de estadías de  vacaciones,
validando los datos ingresados. 
nombre del titular ,lugar ( “bariloche”, “cataratas” o “salta”),
temporada(“otoño”,”invierno, “verano,”primavera”),
cantidad de personas que viajan.
informar:
a)el lugar más elegido
b)el nombre del titular que lleva más pasajeros.
c)el promedio de personas por viaje,  que viajan en invierno
*/
function mostrar()
{
	let titular;
	let lugar;
	let temporada;
	let cantidadPasajeros;
	let contadorSalta=0;
	let contadorCataratas=0;
	let contadorBariloche=0;
	let lugarMasElegido;
	let titularMasPasajeros;
	let cantidadMayorPasajeros;
	let flagMasPasajeros=0;
	let promedioInvierno=0;
	let contElecInvierno=0;
	let acumPasajerosInvierno=0;
	let respuesta;
	do{
titular=prompt("Ingrese el nombre del titular");
lugar=prompt("Ingrese el destino al que va a viajar").toLowerCase();
while(lugar !="salta" && lugar!="bariloche" && lugar!="cataratas"){
	lugar=prompt("Ingrese un destino valido! Estos son: Bariloche, Cataratas y Salta").toLowerCase();
}
temporada=prompt("Ingrese la estación del año en la que va a viajar").toLowerCase();
while(temporada!="otoño" && temporada!="primavera" && temporada!="invierno" && temporada != "verano"){
	temporada=prompt("Ingrese una estación valida! Estass son: Otoño, Primavera, Invierno o Verano").toLowerCase();
}
cantidadPasajeros=parseInt(prompt("Ingrese la cantidad de pasajeros que van a viajar"));
while(cantidadPasajeros<1 && cantidadPasajeros>20){
	cantidadPasajeros=parseInt(prompt("Cantidad invalida! Ingrese una cantidad entre 1 y 20"));
}

switch(lugar){
	case "salta":
		contadorSalta++;
	break;
	case "bariloche":
		contadorBariloche++;
		break;
	case "cataratas":
		contadorCataratas++;
		break;
}
if(contadorSalta>contadorCataratas && contadorSalta>contadorBariloche){
	lugarMasElegido="Salta";
}
else if(contadorCataratas>contadorSalta && contadorCataratas>contadorBariloche){
	lugarMasElegido="Cataratas";
}
else{
	lugarMasElegido="Bariloche";
}

if(flagMasPasajeros==0 || cantidadPasajeros>cantidadMayorPasajeros){
cantidadMayorPasajeros=cantidadPasajeros;
titularMasPasajeros=titular;
flagMasPasajeros=1;
}

if(temporada=="invierno"){
	acumPasajerosInvierno+=cantidadPasajeros;
	contElecInvierno++;
}


respuesta=prompt("Escriba si para ingresar más datos");	
}while(respuesta=="si");

promedioInvierno=acumPasajerosInvierno/contElecInvierno;
console.log("A - El destino más elegido fue "+lugarMasElegido);
console.log("B - El nombre del titular que lleva mayor cantidad de pasajeros es "+titularMasPasajeros);
console.log("C - El promedio de pasajeros que viajan en invierno es "+promedioInvierno);
}
