const menu = document.querySelector('i.fa-bars');
const div = document.querySelector('div.menu');

menu.addEventListener('click', ()=>{
   if (div.classList[1] === undefined) {
         div.classList.add('active');
   } else if(div.classList[1] === 'active') {
         div.classList.remove('active');
   }
});