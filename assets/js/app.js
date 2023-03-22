const baseEndpoint = 'https://api.github.com';
const usersEndpoint = `${baseEndpoint}/users`;

//se cambio simbolo de gato(#) por un .(punto)
const n = document.querySelector('.name');

//se cambio simbolo de gato(#) por un .(punto)
const b = document.querySelector('.blog');

//se creo otro elemento de tipo p, para poder apuntarlo con el queryselector siguiente
const l = document.querySelector('.location');

function displayUser(username) {
  //envio un console para comprobar si entra a esta funcion
  console.log("entro a display");
  n.textContent = 'cargando...';
  //const response = await fetch(`${usersEndpoint}/${username}`);
  const data =  fetch(`${usersEndpoint}/${username}`).
  then(info=> info.json())
  .then((data)=>{posicionar(data)});
  //console.log(for(let i in data){console.log(i);}));
  
  
}

function posicionar(datos){
  console.log("entro a posicionar");
//n.textContent = '${data.name}';
n.textContent = datos.login;

//b.textContent = data.blog;
b.textContent = datos.html_url;

console.log(datos.blog);
l.textContent =datos.organizations_url;
}

function handleError(err) {
  //envio un console para comprobar si entra a esta funcion
  console.log("entro a error");
  console.log('OH NO!');
  console.log(err);
  n.innerHTML = `Algo salió mal: ${err}`
}
//'tolinski'
displayUser('tolinski');
//.catch(handleError);