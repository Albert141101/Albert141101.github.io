let typed = new Typed('#typed', { // Тут id того блока, в которм будет анимация
  stringsElement: '#typed-strings', // Тут id блока из которого берем строки для анимации
  typeSpeed: 40, // Скорость печати
  startDelay: 1500, // Задержка перед стартом анимации
  backSpeed: 20, // Скорость удаления
  loop: true, // Указываем, повторять ли анимацию
});

window.onscroll = function showHeader() {
   header = document.getElementById('header');

  if(scrollY > 200){
    header.classList.add('header_fixed');
  }
  else if (scrollY < 100){
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