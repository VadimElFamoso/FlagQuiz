const image = document.querySelector("#container img");
const answer = document.getElementById("answer");
const validation = document.getElementById("validation");
const true_response = document.getElementById("true_response");
const false_response = document.getElementById("false_response");

fetch("https://flagcdn.com/en/codes.json")
    .then(response => response.json())
    .then((data) => {
        
        function imageUrlBuilder(){
            let chosen_country_random = Math.floor(Math.random() * Object.keys(data).length);
            let country_domain = Object.keys(data)[chosen_country_random];
            let imageurl = "https://flagcdn.com/w320/" + country_domain + ".png"
            console.log(imageurl);
            return imageurl;
        }

        validation.addEventListener("click", function(){
            image.src = imageUrlBuilder();
            console.log(answer.value);
        })

        function isValid(verifier){
            if(verifier){

            }
            else{
                
            }
        }




        
    })
    

