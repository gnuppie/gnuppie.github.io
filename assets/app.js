var year = new Date().getFullYear();
var age = year - 1999
document.getElementsByClassName("ageJS")[0].innerHTML = `${age} years old`;

document.getElementsByClassName("copyright")[0].innerHTML = `&copy; Louis Pung ${year}.`;

//document.getElementById('modal-btn').addEventListener('click', function() {
//document.querySelector('.bg-modal').style.display = 'flex';
//});
//
//document.querySelector('.close').addEventListener('click', function() {
//document.querySelector('.bg-modal').style.display = 'none';
//});

var modalBtn = document.querySelector('.modal-btn');
var modalBg = document.querySelector('.bg-modal');
var modalClose = document.querySelector('.close')

modalBtn.addEventListener('click', function() {
modalBg.classList.add('bg-active');
});

modalClose.addEventListener('click', function() {
modalBg.classList.remove('bg-active');
})

function reveal() {
  var reveals = document.querySelectorAll(".reveal");

  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 150;

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}

window.addEventListener("scroll", reveal);
