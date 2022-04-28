// const toggleButton = document.getElementsByClassName('nav_toggle')[0];
// const navLinks = document.getElementsByClassName('nav_link');
// toggleButton.addEventListener('click',function(){
//     for(var i=0; i<navLinks.length; i++)
//     navLinks[i].classList.toggle('active');
// });
const nav_toggle = document.querySelector('.nav_toggle');
const nav_link = document.querySelector('.nav_link');

nav_toggle.addEventListener('click',show);
// nav_toggle.addEventListener('click',show);

function show(){
    nav_link.style.display='flex';
    nav_link.style.top='0';
}
// function close(){
//     nav_link.style.top='-100%';
