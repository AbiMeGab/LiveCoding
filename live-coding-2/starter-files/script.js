// API
const API_ENDPOINT = 'https://yesno.wtf/api';

let btn = document.getElementById("button");
let answer = document.getElementById("answer");

btn.addEventListener("click", function(e){
    e.preventDefault
    fetchAnswer();
});

function fetchAnswer (){
    let promesa = fetch(API_ENDPOINT,
        {method: "GET"
    })


promesa.then((response)=> {
    response.json().then((data)=>{
        answer.innerHTML=`${data.answer}`
    })
});
}

/**
 * STEPS:
 *
 * 1. Create a fetchAnswer function and call the API
 * 2. Output the API's response
 * 3. Attach fetchAnswer to an event listener
 * 4. Clear output after 3 seconds
 * 5. Optional: add loading/error states
 *
 */
