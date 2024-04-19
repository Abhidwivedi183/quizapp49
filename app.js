const questions = [
  {
    question:"who have most ballondors",
    answers:[
      {
        text:"Ronaldo",
        correct:false,
      }
      ,
      {
        text:"Messi",
        correct:true,
      },
      {
        text:"Neymar",
        correct:false,
      },
      {
        text:"Ramos",
        correct:false,
      }
    ]
  }
  ,
  {
    question:"As a captain have all trophies?",
    answers:[
      {
        text:"MSD",
        correct:true,
      }
      ,
      {
        text:"Kohli",
        correct:false,
      },
      {
        text:"Rohit",
        correct:false,
      },
      {
        text:"Pandya",
        correct:false,
      }
    ]
  },
  {
    question:"Player in NBA known as Mamba?",
    answers:[
      {
        text:"MJ",
        correct:false,
      }
      ,
      {
        text:"Kobe",
        correct:true,
      },
      {
        text:"James",
        correct:false,
      },
      {
        text:"Shaq",
        correct:false,
      }
    ]
  }
]

const quets = document.getElementById("question");
const ans = document.getElementById("answer");

const nextbtn = document.getElementById("nextbtn");


const but = document.getElementsByClassName("btn");

let idx = 0;
let score = 0;


function startquiz(){
  let idx = 0;
let score = 0;
nextbtn.innerHTML = "Next";
showquestion();
}


function showquestion(){
resetstate();

  let currq = questions[idx];
  let qustionno = idx + 1;
  quets.innerHTML = qustionno + "." + currq.question;
currq.answers.forEach(an=>{
  const btn = document.createElement('button');
  btn.classList.add("btn");
  btn.innerHTML = an.text;
  ans.appendChild(btn);

  if(an.correct){
    btn.dataset.correct = an.correct;
  }
btn.addEventListener('click',selectans);

})

}


function selectans(e){
  const selectbtn = e.target;
  const iscorrect = selectbtn.dataset.correct === "true";
  if(iscorrect){
    selectbtn.classList.add("correct");
    score++;
  }
  else{
    selectbtn.classList.add("incorrect");
  }
Array.from(ans.children).forEach(button=>{
  if(button.dataset.correct === "true"){
    button.classList.add("correct");
  }
  button.disabled = true;
});
nextbtn.style.display = "block";


}
let src = document.getElementById("score");



nextbtn.addEventListener('click',function(e){
  if(idx<questions.length){
    nextmove();
  }
  else{
    startquiz();
  }
})

function nextmove(){
idx+=1;
if(idx<questions.length){
  showquestion();
}
else{
  showscore();
}


}

function showscore(){
resetstate();
  src.innerHTML = `your scored ${score} out of ${questions.length}`;
src.style.display = "block";
nextbtn.innerHTML = "playagain"
nextbtn.style.display = "block";
}






startquiz();

function resetstate(){
  nextbtn.style.display = "none";
while(ans.firstChild){
  ans.removeChild(ans.firstChild);
}

}















