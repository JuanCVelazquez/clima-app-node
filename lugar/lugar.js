const axios =require('axios');

const getLugarLatLng = async (dir) => {
	const encodeUrl=encodeURI(dir)

	const instance = axios.create({
	  baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${encodeUrl}`,
	  headers: {'X-RapidAPI-Key': '6046fc23a2msh574412aa0b644c2p1c0f6djsn1f9bfc191490'}
	});

	/*instance.get()
		.then(resp=>{
			console.log(resp.data.Results[0]);
		})
		.catch(err=>{
			console.log('Error!!!!!',err)
		});*/
	const resp=await instance.get();
	
	if (resp.data.Results.length===0) {
		throw new Error(`No hay resultados para ${dir}`);
	}	

	const dato=resp.data.Results[0];
	const direccion=dato.name;
	const lat=dato.lat;
	const lng=dato.lon;
	return {
		direccion,
		lat,
		lng
	}
}

module.exports={
	getLugarLatLng
}

