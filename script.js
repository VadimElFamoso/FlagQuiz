const image = document.querySelector("#container img");
const answer = document.getElementById("answer");
const validation = document.getElementById("validation");
const true_response = document.getElementById("true_response");
const false_response = document.getElementById("false_response");

let true_response_number = document.getElementById("true_response_number");
let false_reponse_number = document.getElementById("false_reponse_number");

true_response_number.innerHTML = 0;
false_response_number.innerHTML = 0;

fetch("https://flagcdn.com/fr/codes.json")
    .then(response => response.json())
    .then((data) => {
        console.log(data);
        //On refresh, show a new random flag :
        const flag_info = getRandomCountryDomain();
        image.src = apiUrlBuilder(flag_info.domain);


        //Function that generates a random country-domain composed of two letters :
        function getRandomCountryDomain(){
            let chosen_country_random = Math.floor(Math.random() * Object.keys(data).length);
            let country_domain = Object.keys(data)[chosen_country_random];
            return {
                index: chosen_country_random,
                domain: country_domain,
            }
        }

        //Depending on the random domain, find the corresponding country :
        function getCorrespondingCountry(index){
            return Object.values(data)[index];
        }

        function isValidAnswer(user_answer, country_name){

            if(user_answer == ""){
                console.log("Aucune valeur n'a été spécificée");
                return;
            }
                //La réponse est juste, passage au drapeau suivant.
                if(user_answer == country_name){
                    answer.value = "";
                    image.src = apiUrlBuilder(flag_info.domain.toString());         
                    console.log("Bien joué !");
                }
                //La réponse est fausse, on prévient l'utilisateur.
                else{
                    console.log("Pas bien joué");
                }    
            
            

        }


        //Function that builds a new flag url :
        function apiUrlBuilder(domain){
            let apiurl = "https://flagcdn.com/w320/" + domain + ".png"
            return apiurl;

        }

        validation.addEventListener("click", function(){
            isValidAnswer(answer.value, getCorrespondingCountry(flag_info.index))

        })
        
    })
    

