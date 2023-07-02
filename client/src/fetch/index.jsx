async function  fetchData(url,options){
 const res =  await fetch(url).then((response)=>response.json());
 return res
}


export default fetchData