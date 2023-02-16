const image = document.querySelector("#container img");
const true_response = document.getElementById("true_response");
const false_response = document.getElementById("false_response");

fetch("https://flagcdn.com/fr/codes.json")
    .then(response => response.json())
    .then((data) => {
        console.log(data);
        console.log(data.length);

        
    })
    

function ImageUrlBuilder(){

}