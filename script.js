// TYPING EFFECT

const words = [
    "Aspiring Software Developer",
    "Frontend Developer",
    "AIML Engineering Student",
    "Java Programmer"
];

let i = 0;
let j = 0;
let currentWord = "";
let isDeleting = false;

function type(){

    currentWord = words[i];

    if(!isDeleting){
        document.querySelector(".typing").textContent =
        currentWord.substring(0,j+1);

        j++;

        if(j === currentWord.length){
            isDeleting = true;
        }

    }

    else{

        document.querySelector(".typing").textContent =
        currentWord.substring(0,j-1);

        j--;

        if(j === 0){
            isDeleting = false;
            i++;

            if(i === words.length){
                i = 0;
            }
        }
    }

    setTimeout(type,120);
}

type();


// SCROLL REVEAL

window.addEventListener("scroll", reveal);

function reveal(){

    let reveals = document.querySelectorAll(".reveal");

    for(let i = 0; i < reveals.length; i++){

        let windowHeight = window.innerHeight;

        let revealTop = reveals[i].getBoundingClientRect().top;

        let revealPoint = 100;

        if(revealTop < windowHeight - revealPoint){

            reveals[i].classList.add("active");
        }
    }
}