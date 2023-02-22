const image = document.querySelector("#container img");
const answer = document.getElementById("answer");
const validation = document.getElementById("validation");
const true_response = document.getElementById("true_response");
const false_response = document.getElementById("false_response");

let true_response_number = document.getElementById("true_response_number");
let false_response_number = document.getElementById("false_response_number");

//Initialisation des scores : 
let true_response_result = 0;
let false_response_result = 0;
true_response_number.innerHTML = true_response_result;
false_response_number.innerHTML = false_response_result;

fetch("https://flagcdn.com/fr/codes.json")
    .then(response => response.json())
    .then((data) => {
        console.log(data);
        //On refresh, show a new random flag :
        const flag_info = getRandomCountryDomain();
        image.src = apiUrlBuilder(flag_info.domain);


        //Function that generates a random country-domain composed of two letters :
        function getRandomCountryDomain(){

            console.log("La fonction getrandomcountry est déclenchée");
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
                    const flag_info = getRandomCountryDomain();
                    image.src = apiUrlBuilder(flag_info.domain);
                    true_response_result++;
                    true_response_number.innerHTML = true_response_result;
                }
                //La réponse est fausse, on prévient l'utilisateur.
                else{
                    const flag_info = getRandomCountryDomain();
                    image.src = apiUrlBuilder(flag_info.domain);
                    false_response_result++;
                    false_response_number.innerHTML = false_response_result;
                }    
            
            

        }


        //Function that builds a new flag url :
        function apiUrlBuilder(domain){
            let apiurl = "https://flagcdn.com/w320/" + domain + ".png"
            return apiurl;

        }

        validation.addEventListener("click", function(){
            const flag_info = getRandomCountryDomain();
            isValidAnswer(answer.value, getCorrespondingCountry(flag_info.index))

        })
        
    })
    

