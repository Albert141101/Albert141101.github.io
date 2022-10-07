let typed = new Typed('#typed', { // Тут id того блока, в которм будет анимация
  stringsElement: '#typed-strings', // Тут id блока из которого берем строки для анимации
  typeSpeed: 40, // Скорость печати
  startDelay: 1500, // Задержка перед стартом анимации
  backSpeed: 20, // Скорость удаления
  loop: true, // Указываем, повторять ли анимацию
});

// skills = document.getElementById('showSkill');
// console.log(skills)



window.addEventListener('scroll', function () {
  skills = document.getElementsByClassName('showSkill');
  aboutAnim = this.document.getElementsByClassName('aboutAnim');
  // console.log(skills)
  if (scrollY > 500) {
    skills[0].classList.add('percentagem');
    skills[1].classList.add('percentagem');
    skills[2].classList.add('percentagem');
    skills[3].classList.add('percentagem');
    skills[4].classList.add('percentagem');
    skills[5].classList.add('percentagem');
    skills[6].classList.add('percentagem');
  }
  if(scrollY > 200){
    aboutAnim[0].classList.add('aboutMe');
    aboutAnim[1].classList.add('aboutMe');
    aboutAnim[2].classList.add('aboutMe');
  }

});



window.onscroll = function showHeader() {
  header = document.getElementById('header');

  if (scrollY > 200) {
    header.classList.add('header_fixed');
  }
  else if (scrollY < 1) {
    header.classList.remove('header_fixed');
  }
};

// window.onscroll = function skill() {
//   var skills = document.getElementById('skill');

//   console.log(skills);
//   if(scrollY > 300){
//     if(document.createElement("div") == skills) {
//       skills.classList.add('percentagem');
//     };
//   };
// };



$('.single-item').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 1500,
});