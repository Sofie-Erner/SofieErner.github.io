const skillbut1 = document.getElementById('skillBut');
const workbut1 = document.getElementById("workBut");
const acadbut1 = document.getElementById("acadBut");

const divexp = document.getElementById("expDiv");

function changeToSkills() {
  divexp.innerHTML = 
  "<img src='images/Skills_graphic.PNG' alt='Graphics displaying skills with associated levels of experience' width='100%'  /> <p> Code available at <a href='https://github.com/Sofie-Erner' target='_blank' > GitHub </a> </p>";
}
skillbut1.addEventListener('click',changeToSkills);


function changeToWork() {
  divexp.innerHTML = "<p> here will be work experiences </p>";
}
workbut1.addEventListener('click',changeToWork);

function changeToAcad() {
  divexp.innerHTML = "<p> here will be academic experiences </p>";
}
acadbut1.addEventListener('click',changeToAcad);