/*
2)De una compra debes ingresar una cantidad indeterminada de productos,
validando los siguientes datos:
marca, precio, peso en kilogramos, tipo(sólido o líquido)
a)informar el peso total de la compra.
b)la marca del más caro de los líquidos
c)la marca del más liviano de los sólidos
*/function mostrar()
{
  let tipo;
  let peso;
  let precio;
  let marca;
  let respuesta;
  let acumPeso=0;
  let precioCaroLiqui;
  let marcaLiquiCara;
  let flagLiquidoCaro=0;
  let pesoLivianoSolido;
  let marcaLivianaSolido;
  let flagSolidoLiviano=0;
  do{
tipo=prompt("Ingrese si el producto es líquido o sólido").toLowerCase();
while(tipo!="liquido" && tipo!="líquido" && tipo!="solido" && tipo!="sólido"){
  tipo=prompt("Tipo invalido!!! Ingrese si el producto es líquido o sólido");
}
peso=parseFloat(prompt("Ingrese el peso en kg del producto. El valor debe estar entre 1kg y 500kg"));
while(peso<1 || peso>500){
  peso=prompt("Peso invalido! Ingrese un peso entre 1kg y 500kg");
}
acumPeso+=peso;
precio=parseFloat(prompt("Ingrese el precio del producto. Debe estar entre $300 y $3000"));
while(precio<300 || precio>3000){
  precio=parseFloat(prompt("Precio invalido!!! El precio debe estar entre $300 y $3000"));
}
marca=prompt("Ingrese la marca del producto");
switch(tipo){
  case "liquido":
  case "líquido":
    if(flagLiquidoCaro==0 || precio>precioCaroLiqui){
      precioCaroLiqui=precio;
      marcaLiquiCara=marca;
      flagLiquidoCaro=1;
     }
  break;
  case "solido":
  case "sólido":
    if(flagSolidoLiviano==0 || peso<pesoLivianoSolido){
      pesoLivianoSolido=peso;
      marcaLivianaSolido=marca;
      flagSolidoLiviano=1;
    }
}

    respuesta=prompt("Escriba si para ingresar mas productos. Escriba no para finalizar el ingreso");
   }while(respuesta=="si");
   if(flagLiquidoCaro==0){
     marcaLiquiCara="No se ingresaron líquidos";
   }
   if(flagSolidoLiviano==0){
     marcaLivianaSolido="No se ingresaron sólidos";
   }
  console.log("A - El peso total de la compra es de "+acumPeso+" kg");
  console.log("B - La marca del más caro de los líquidos es "+marcaLiquiCara);
  console.log("C - La marca del sólido mas liviano es "+marcaLivianaSolido);
}
