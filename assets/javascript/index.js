const menu = document.querySelector('i.fa-bars');
const div = document.querySelector('div.menu');
const body = document.querySelector('body');

body.addEventListener('resize', ()=>{
   if (window.innerWidth >= 860) {
      div.classList.remove('active');
   } else {
      div.classList.add('active');
   }
});

menu.addEventListener('click', () => {
   if (div.classList[1] === undefined) {
      div.classList.add('active');
   } else if(div.classList[1] === 'active') {
      div.classList.remove('active');
   }
});