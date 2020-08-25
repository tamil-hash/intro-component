var fname=document.querySelector('#fname');
var lname=document.querySelector('#lname');
var email=document.querySelector('#email');
var pass=document.querySelector('#pass');

document.querySelector('#but').addEventListener('click', function (){

  if(fname.value ===''){
    document.querySelectorAll('.error')[0].style.opacity='1';
    document.querySelectorAll('.error')[1].style.opacity='1';
    document.querySelectorAll('input')[0].style.borderColor='hsl(0, 100%, 74%)';
  }
  else{
    document.querySelectorAll('.error')[0].style.opacity='0';
    document.querySelectorAll('.error')[1].style.opacity='0';

  }
  if(lname.value ===''){
    document.querySelectorAll('.error')[2].style.opacity='1';
    document.querySelectorAll('.error')[3].style.opacity='1';
    document.querySelectorAll('input')[1].style.borderColor='hsl(0, 100%, 74%)';
  }
  else{
    document.querySelectorAll('.error')[2].style.opacity='0';
    document.querySelectorAll('.error')[3].style.opacity='0';
  }
  if(email.value === ""||(!validEmail(email.value))){
      document.querySelectorAll('.error')[4].style.opacity = "1";
      document.querySelectorAll('.error')[5].style.opacity = "1";
      document.querySelectorAll('input')[2].style.borderColor='hsl(0, 100%, 74%)';
      document.querySelectorAll('input')[2].style.color='hsl(0, 100%, 74%)';
    }
    else {
      document.querySelectorAll('.error')[4].style.opacity = "0";
      document.querySelectorAll('.error')[5].style.opacity = "0";
    }
  if(fname.value ===''){
    document.querySelectorAll('.error')[6].style.opacity='1';
    document.querySelectorAll('.error')[7].style.opacity='1';
    document.querySelectorAll('input')[3].style.borderColor='hsl(0, 100%, 74%)';
  }
  else{
    document.querySelectorAll('.error')[6].style.opacity='0';
    document.querySelectorAll('.error')[7].style.opacity='0';
  }
})
function validEmail(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    return re.test(String(email).toLowerCase());
}
