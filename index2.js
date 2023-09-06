
// const wrapper =document.querySelector('.wrapper');
var wrapper=document.getElementById("wrapper");
const LoginLink =document.querySelector('.login');
const registerLink =document.querySelector('.register');

registerLink.addEventListener('click', ()=>{
    wrapper.classList.add('active');
});

LoginLink.addEventListener('click', ()=>{
    wrapper.classList.remove('active');
});

function login(){
    wrapper.style.visibility="visible";

}

function close2(){
    wrapper.style.visibility="hidden" ;
  
};

