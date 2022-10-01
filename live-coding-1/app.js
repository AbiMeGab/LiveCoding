const string1 = ['insecto', 'bootcamp', 'mangos', 'reptil', 'mosca', 'escritorio'];
let lista = document.getElementById("lista");
funcion(string1);

function funcion(string1) {
    string1.forEach(element => { //El forEach va a recorrer todos los elementos dentro de mi Array string1
        if (element.length > 6) { //Con el If estoy filtrando el tamaño de los elementos para que me dé los más largos, mayores de 6 carácteres.
            lista.innerHTML += `<li>${element}</li>` //Con esta función, imprimo en pantalla
        }
    });
}