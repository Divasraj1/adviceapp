const adviceNumber = document.getElementById("title-number");
const adviceMessage = document.getElementById("advice");
const button = document.getElementById("btn");

const apiUrl = "https://api.adviceslip.com/advice";

async function fetchadvice(){
    try{
        const response = await fetch(apiUrl);
        if(!response.ok){
            throw new Error(`HTTP error: ${response.status}`);
        }
        return await response.json();
    }
    catch(e){
        console.error(e);
    }
}

button.addEventListener("click",() =>{
    fetchadvice().then((advice) =>{
        const slip = advice.slip;
        adviceNumber.innerText = slip.id;
        adviceMessage.innerText = `"${slip.advice}"`;
    });
});