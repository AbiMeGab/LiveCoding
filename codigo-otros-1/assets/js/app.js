const baseEndpoint = 'https://api.github.com';
const usersEndpoint = `${baseEndpoint}/users`;
const $n = document.getElementById('name');
const $b = document.getElementById('blog');
const $l = document.getElementById('location');

function displayUser() {
  fetchAnswer();

  function fetchAnswer (){
     let info = fetch(baseEndpoint, {
      method: "GET"
     })
 
  info.then((response)=>{
    response.json().then((data)=>{
      console.log(data);
    })
  })
 }
  $n.textContent = 'cargando...';
  console.log(info);
  $n.textContent = `${data.name} + usersEndpoint`;
  $b.textContent = `${data.blog}`;
  $l.textContent = `${data.location}`;
}

function handleError(err) {
  console.log('OH NO!');
  console.log(err);
  n.textContent = `Algo salió mal: ${err}`
}

displayUser('stolinski').catch(handleError);