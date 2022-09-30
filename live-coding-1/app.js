const string1 = ['insecto', 'bootcamp', 'mangos', 'reptil', 'mosca', 'escritorio'];
let lista = document.getElementById("lista");
funcion(string1);
//tope = element <= 7;

function funcion(string1) {
    string1.forEach(element => {
        lista.innerHTML += `<li>${element}</li>`
    });
}