
const questions=[
    {
        question:"Inside which HTML element do we put the JavaScript?",
        answers:[
            {text:` &lt;javascript&gt;`, correct:false},
            {text:"&lt;js&gt;", correct:false},
            {text:"&lt;scrip&gt", correct:true},
            {text:"&lt;javascript&gt", correct:false},
        ]
    },
    {
        question:`What is the correct JavaScript syntax to change the content of the HTML element below?

        <p id="demo">This is a demonstration.</p>`,
        answers:[
            {text:`document.getElementByName("p").innerHTML="hello world!";`, correct:false},
            {text:`document.getElementById("demo").innerHTML="hello world!";`, correct:true},
            {text:`#demo.innerHTML="hello world!;"`, correct:false},
            {text:`document.getElement("p").innerHTML="hello world!;"`, correct:false},
        ]
    },
    {
        question:`Where is the correct place to insert a JavaScript?`,
        answers:[
            {text:`Both the <head> section and the <body> section are correct`, correct:true},
            {text:`the <head> section`, correct:false},
            {text:`the <body> section`, correct:false},
            {text:`None of the above`, correct:false},
        ]
    },{
        question:`What is the correct syntax for referring to an external script called "xxx.js"?`,
        answers:[
            {text:`script href="xxx.js`, correct:false},
            {text:`<script mane="xxx.js>`, correct:false},
            {text:`script src="xxx.js`, correct:true},
            {text:`None of the above`, correct:false},
        ]
    },
    {
        question:`How do you write "Hello World" in an alert box?`,
        answers:[
            {text:`alertBox("helloworld");`, correct:false},
            {text:`msgBox("helloworld");`, correct:false},
            {text:`msg("helloworld");`, correct:false},
            {text:`alert("helloworld");`, correct:true},
        ]
    },
    {
        question:`How to write an IF statement in JavaScript?`,
        answers:[
            {text:`if i==5 then`, correct:false},
            {text:`if i=5 then`, correct:false},
            {text:`if i=5`, correct:false},
            {text:`if (i==5)`, correct:true},
        ]
    }
];
const questionbtn=document.getElementById("question");
const answerelement=document.getElementById("answer-buttons");
const nextbtn=document.getElementById("next-btn");
let currentQuestionindex=0;
let score=0;

function startQuiz(){
    currentQuestionindex=0;
    score=0;
    nextbtn.innerHTML='next';
    showQuestion();
}
function showQuestion(){
    resetState();
    let currentQuestion=questions[currentQuestionindex];
    let questionNo=currentQuestionindex+1;
    questionbtn.innerHTML=questionNo+'.'+currentQuestion.question;
    currentQuestion.answers.forEach(answer => {
        const button=document.createElement("button");
        button.innerHTML=answer.text;
        console.log(answer.text);
        button.classList.add("btn");
        answerelement.appendChild(button);
        if (answer.correct){
            button.dataset.correct=answer.correct;
        }
        button.addEventListener('click',selectAnswer);
    });
}
function resetState(){
    nextbtn.style.display='none';
    while (answerelement.firstChild) {
        answerelement.removeChild(answerelement.firstChild);
        
    }
}
function handleNextButton(){
    currentQuestionindex++;
    if(currentQuestionindex<questions.length){

        showQuestion();
    }
    else{
        showScore();
    }
 }
 function showScore(){
    resetState();
    questionbtn.innerHTML=`your score ${score} out of ${questions.length}`;
    nextbtn.innerHTML='play again';
    nextbtn.style.display='block'
    nextbtn.addEventListener('click', startQuiz);
 }
 function selectAnswer(e){
    const selectionbtn=e.target;
    const isCorrect=selectionbtn.dataset.correct==='true'
    if(isCorrect){
        selectionbtn.classList.add('correct');
        score++;
    }
    else{
        selectionbtn.classList.add('incorrect');
    }
    console.log(selectionbtn.dataset);
    Array.from(answerelement.children).forEach(button => {
        if(button.dataset.correct==='true'){
            button.classList.add("correct");
        }
        button.disabled=true;
    });
    nextbtn.style.display='block';
 }
 nextbtn.addEventListener("click",()=>{
    if(currentQuestionindex<questions.length){
        handleNextButton();
    }else{
        showScore();
    }
 });

 

startQuiz();