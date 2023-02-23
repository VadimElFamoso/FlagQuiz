const image = document.querySelector("#container img");
const answer = document.getElementById("answer");
const validation = document.getElementById("validation");

let true_response_number = document.getElementById("true_response_number");
let false_response_number = document.getElementById("false_response_number");

//Initialisation des scores : 
let true_response_result = 0;
let false_response_result = 0;
true_response_number.innerHTML = true_response_result;
false_response_number.innerHTML = false_response_result;

let real_answer = "";

fetch("https://flagcdn.com/fr/codes.json")
    .then(response => response.json())
    .then((data) => {
        console.log(data);
        
        //Génère un nouveau drapeau au refresh de la page :
        getRandomCountry();

        //Génère un nouveau drapeau aléatoire
        function getRandomCountry(){
        let random_chosen_country_index = Math.floor(Math.random() * Object.keys(data).length); 
        let random_chosen_country_domain = Object.keys(data)[random_chosen_country_index];
        let random_chosen_country_name = Object.values(data)[random_chosen_country_index];
        image.src = "https://flagcdn.com/w320/" + random_chosen_country_domain + ".png";
        real_answer = random_chosen_country_name;
        console.log(real_answer);
        }

        function isValid(user_answer, country_name){
            if(user_answer == ""){
                console.log("Aucune valeur n'a été spécifiée");
                return;
            }
            
            if(user_answer == country_name){
                answer.value = "";
                true_response_result++;
                true_response_number.innerHTML = true_response_result;
                getRandomCountry();
                return;     
            }
            else{
                answer.value = "";
                false_response_result++;
                false_response_number.innerHTML = false_response_result;
                getRandomCountry();
                return;
            }
        }

        validation.addEventListener("click", function() {
            isValid(answer.value, real_answer);
        })       
    })
    

