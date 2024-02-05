let app = document.getElementById("app");
let currentQuestion;
let points = 0;
let questionsAnswered = 0;
let randomTall = 0;
let health = 3;

const question1 = {
    spørsmål: "Hvem lagde albumet 'Graduation' i 2007",
    svar1: "Lady Gaga",
    svar2: "Prince",
    svar3: "Kanye West",
    svar4: "Chris Brown",
    riktigsvar: '3'
}

const question2 = {
    spørsmål: "Hvem er statsminister i Norge?",
    svar1: "Erna Solberg",
    svar2: "Jonas Gahr Støre",
    svar3: "Kong Harald",
    svar4: "Kim Kardashian",
    riktigsvar: '2'
}


const question3 = {
    spørsmål: "Hvilken norske skuespiller har rolla som George Kistiakowsky i filmen Oppenheimer?",
    svar1: "Trond Fausa",
    svar2: "Aksel Hennie",
    svar3: "Jon Øigarden",
    svar4: "Kristoffer Joner",
    riktigsvar: '1'
}

const question4 = {
    spørsmål: "Hvor mange live-action Star Wars filmer er det?",
    svar1: "9",
    svar2: "6",
    svar3: "11",
    svar4: "13",
    riktigsvar: '3'
}

const question5 = {
    spørsmål: "Hvem av disse er ikke ett medlem av 'The Beatles'?",
    svar1: "John",
    svar2: "Ringo",
    svar3: "George",
    svar4: "Tommy",
    riktigsvar: '4'
}

const question6 = {
    spørsmål: "I hvilken film finner man karakteren 'Tyler Durden'?",
    svar1: "Fight Club",
    svar2: "Shutter Island",
    svar3: "Taxi Driver",
    svar4: "American Psycho",
    riktigsvar: '1'
}

const question7 = {
    spørsmål: "Hvor mange millimeter er i ein meter?",
    svar1: "1000 mm",
    svar2: "100 mm",
    svar3: "10000 mm",
    svar4: "10mm",
    riktigsvar: '1'
}

const question8 = {
    spørsmål: "I hvilket land er Wien hovudstad?",
    svar1: "Egypt",
    svar2: "Latvia",
    svar3: "Monaco",
    svar4: "Østerrike",
    riktigsvar: '4'
}

const question9 = {
    spørsmål: "Hvem var president i USA under 9/11?",
    svar1: "Barack Obama",
    svar2: "George W. Bush",
    svar3: "Bill Clinton",
    svar4: "Ronald Reagan",
    riktigsvar: '2'
}

const question10 = {
    spørsmål: "Hvem av disse er ikke ett medlem av hip-hop gruppa 'Wu-Tang Clan'?",
    svar1: "RZA",
    svar2: "GZA",
    svar3: "SZA",
    svar4: "Ol' Dirty Bastard",
    riktigsvar: '3'
}

const question11 = {
    spørsmål: "Hvilken kunstmaler er kjent for å ha malt bilder av solsikker og for å ha skåret av seg øret?",
    svar1: "Vincent Van Gogh",
    svar2: "Pablo Picasso",
    svar3: "Salvador Dali",
    svar4: "Edvard Munch",
    riktigsvar: '1'
}

const question12 = {
    spørsmål: "Hvilken dag er Valentinsdagen?",
    svar1: "Andre torsdag i februar",
    svar2: "17. Februar",
    svar3: "14. Februar",
    svar4: "12. Februar",
    riktigsvar: '3'
}

const question13 = {
    spørsmål: "Hva heter hovudstaden i Spania?",
    svar1: "Barcelona",
    svar2: "Milan",
    svar3: "Gran Canaria",
    svar4: "Madrid",
    riktigsvar: '4'
}




let questions = [
    question1,
    question2,
    question3,
    question4,
    question5,
    question6,
    question7,
    question8,
    question9,
    question10,
    question11,
    question12,
    question13,
]



function startScreen() {
    app.innerHTML = /*HTML*/`
        <h1 class="overskrift">
        Quiz
        </h1>

        <div class="startButtonDiv">
            <button onclick="getQuestion()" class="startButton">Start</button>
        </div>
    `

}

startScreen();


function getQuestion() {
    


    randomTall = Math.floor(Math.random() * questions.length);
    currentQuestion = questions[randomTall];


    app.innerHTML = /*HTML*/`
        <h1 class="overskrift">${currentQuestion.spørsmål}</h1>
        <div class="answerRowOne">
            <div onclick="sjekkSvar('1')" class="answerOne">${currentQuestion.svar1}</div>
            <div onclick="sjekkSvar('2')" class="answerTwo">${currentQuestion.svar2}</div>
        </div>
        <div class="answerRowTwo">
            <div onclick="sjekkSvar('3')" class="answerThree">${currentQuestion.svar3}</div>
            <div onclick="sjekkSvar('4')" class="answerFour">${currentQuestion.svar4}</div>
        </div>

        <div class="health">
        <span id="health1">♡</span>
        <span id="health2">♡</span>
        <span id="health3">♡</span>
        </div>
        <div class="antallSpørsmålDiv">
            <h1>${questionsAnswered}/10</h1>
        </div>
    `

    if (health == 2) {
        document.getElementById("health3").style.color = "grey";
    } else if (health == 1) {
        document.getElementById("health3").style.color = "grey";
        document.getElementById("health2").style.color = "grey";
    } else if (health == 0) {
        gameOver();
    }

    if (questionsAnswered == 10) {
        gameWon()
    }

}

function sjekkSvar(brukerSvar) {
    if (brukerSvar == currentQuestion.riktigsvar) {
        points ++;
    } else {
        health--;
    }
    questionsAnswered ++;
    questions.splice(randomTall, 1)
    getQuestion();
}


function gameOver() {
    app.innerHTML = /*HTML*/`
    <div class="overskrift">
        <h1>Du Tapte</h1>
        <button onclick="restart()">Back to main menu</button>
    </div>
    `
}

function restart() {
    questions = [
        question1,
        question2,
        question3,
        question4,
        question5,
        question6,
        question7,
        question8,
        question9,
        question10,
        question11,
        question12,
        question13,
    ]
    
    health = 3;
    questionsAnswered = 0;
    startScreen();
}

function gameWon() {
    app.innerHTML = /*HTML*/`
    <div class="overskrift">
        <h1>Du Vant!</h1>
        <h3>Med ${health} liv igjen!</h3>

        <button onclick="restart()">Back to main menu</button>
    </div>
    `
}