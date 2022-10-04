const baseEndpoint = 'https://api.github.com';
const usersEndpoint = `${baseEndpoint}/users`;
const $n = document.querySelector('.name'); 
const $b = document.querySelector('.blog');
const $l = document.querySelector('.location');

function displayUser(username) {
     let info = fetch(`${usersEndpoint}/${username}`, {
      method: "GET"
     });
 
  info.then((response)=>{
    response.json().then((data)=>{
      console.log(data);
  $n.textContent = `${data.name}`;
  $b.textContent = `${data.blog}`;
  $l.textContent = `${data.location}`;
    }).catch((error)=>{
      handleError(error);
    });
  }).catch((error)=>{
    handleError(error);
  });
  
}

function handleError(error) {
  console.log('OH NO!');
  console.log(error);
  n.textContent = `Algo salió mal: ${error}`
}

displayUser('stolinski');