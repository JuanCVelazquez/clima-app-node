const lugar =require('./lugar/lugar');
const clima=require('./clima/clima');

const argv=require('yargs').options({
	direccion:{
		alias:'d',
		desc:'Dirección de la ciudad para obtener el clima',
		demand:true 
	}
}).argv;


//argv.deireccion  
//lugar.getLugarLatLng(argv.direccion)
//	.then(console.log);
/*clima.getClima(40.750000,-74.000000)
	.then(console.log)
	.catch(console.log)*/

const getInfo=async(direccion)=>{
	try{
		const corde=await lugar.getLugarLatLng(direccion);
		const temp=await clima.getClima(corde.lat,corde.lng);	
		return `El clima de ${corde.direccion} es de ${temp}.`
	}catch(e){
		return `No se pudo determianr el clima de ${direccion}`;
	}
	

}

getInfo(argv.direccion)
	.then(console.log)
	.catch(console.log);