//Calling Show fucntion while website load
window.onload = function () {
    show(0);
}

// All Questions in one Array

let questions = [
    {
        id: 1,
        question: "What is the full form of RAM ?",
        answer: "Random Access Memory",
        options: [
            "Random Access Memory",
            "Randomely Access Memory",
            "Run Aceapt Memory",
            "None of these"
        ]
    },
    {
        id: 2,
        question: "What is the full form of CPU?",
        answer: "Central Processing Unit",
        options: [
            "Central Program Unit",
            "Central Processing Unit",
            "Central Preload Unit",
            "None of these"
        ]
    },
    {
        id: 3,
        question: "What is the full form of E-mail",
        answer: "Electronic Mail",
        options: [
            "Electronic Mail",
            "Electric Mail",
            "Engine Mail",
            "None of these"
        ]
    },
    {
        id: 4,
        question: "Who gives the theory of gravitational force?",
        answer: "Sir Newton",
        options: [
            "Albert Einstein",
            "Nicolas Tesla",
            "Sir Newton",
            "Ratherford"
        ]
    },
    {
        id: 5,
        question: "Which one is a liquid on a normal temprature",
        answer: "Bromine",
        options: [
            "Iodine",
            "Bromine",
            "Neon",
            "Calcium"
        ]
    },
    {
        id: 6,
        question: "WHO stands for",
        answer: "World Health Organization",
        options: [
            "World Health Organization",
            "World Heavy Object",
            "World Human Organization",
            "None of these"
        ]
    },
    {
        id: 7,
        question: "First women president of India was-",
        answer: "Shrimati Indira Ghandi",
        options: [
            "Shrimati Sarojini Naidu",
            "Shrimati Indira Gandhi",
            "Pandit jawaharlal Nehru",
            "None of these"
        ]
    },
    {
        id: 8,
        question: "What is H<sup>2</sup>o in this following",
        answer: "Compound",
        options: [
            "Element",
            "Atom",
            "Molecule",
            "Compound"
        ]
    },
    {
        id: 9,
        question: "In which country the paper was made first",
        answer: "China",
        options: [
            "Russia",
            "America",
            "China",
            "India"
        ]
    },
    {
        id: 10,
        question: "Which one of the following newspaper was found by Gandhi ji in 1903 at south africa",
        answer: "Indian Opinion",
        options: [
            "Harijan",
            "Indian Opinion",
            "Indian speaker",
            "Indian News"
        ]
    },
    {
        id: 11,
        question: "Who wrote Ardhasastra?",
        answer: "Charakya",
        options: [
            "Kalhan",
            "Visakhadatta",
            "Bana Bhatta",
            "Charakya"
        ]
    },
    {
        id: 12,
        question: "A canteen requries 112kg of wheat for one week. How many kgs of wheat will it require for 69 days?",
        answer: "1,104kgs",
        options: [
            "1,204kgs",
            "1,401kgs",
            "1,104kgs",
            "1,014kgs"
        ]
    },
    {
        id: 13,
        question: "Which one of the folowng is the greatest circle?",
        answer: "Arctic Circle",
        options: [
            "Arctic Circle",
            "Equator",
            "Topic of Cancer",
            "Topic of Capricorn"
        ]
    },
    {
        id: 14,
        question: "The longest river of India is",
        answer: "Godvari",
        options: [
            "Narmada",
            "Godvari",
            "Mahandi",
            "kaveri"
        ]
    },
    {
        id: 15,
        question: "Formation f Ozone hole is maximum over",
        answer: "Antartica",
        options: [
            "Africa",
            "India",
            "Antartica",
            "Europe"
        ]
    }
    


];
function submitForm(e) {
    e.preventDefault();
    let name = document.forms["welcome_form"]["name"].value;

    //Storing Player name in session storage

    sessionStorage.setItem("player_name", name);
    location.href = "quiz.html"

}
let question_count = 0;
let point = 0;
function next() {
    if(question_count == questions.length-1){
        location.href = "end.html";
        sessionStorage.setItem("Time",`${min} minutes and ${sec} second`);
        clearInterval(timer_function);
    }
    let ans = document.querySelector("li.option.active").innerHTML;
    if (ans == questions[question_count].answer) {
        point += 10;
        
    }
    sessionStorage.setItem("Points",point)
    question_count++;
    show(question_count)
    console.log(question_count)
}

//Showing Questions from Array to HTML Document



function show(count) {
    let user_name = sessionStorage.getItem("player_name");
    document.querySelector(".user_name").innerHTML = user_name;
    let question = document.getElementById("questions");
    let [first, second, third, fourth] = questions[count].options;

    question.innerHTML = `
  <h2>Q${question_count + 1}. ${questions[count].question}</h2>
   <ul class="option_group">
  <li class="option">${first}</li>
  <li class="option">${second}</li>
  <li class="option">${third}</li>
  <li class="option">${fourth}</li>
</ul> 
  `;
    selectedAnswer();
}

function selectedAnswer() {
    let answers = document.querySelectorAll("li.option");
    for (let i = 0; i < answers.length; i++) {
        answers[i].onclick = function () {
            for (let j = 0; j < answers.length; j++) {
                if (answers[j].classList.contains("active")) {
                    answers[j].classList.remove("active");
                }
            }
            answers[i].classList.add("active");
        }
    }
}
