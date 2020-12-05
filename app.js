// UI variables
const form = document.querySelector("#email-form");
const submitBtn = document.querySelector('.submit-btn'); 
const err = document.querySelector('.error');
const emailInput = document.querySelector('#email-input');

// Display Error
form.addEventListener('submit', (e)=>{

  // Errors: empty, doesn't include @ or .
  if (emailInput.value === "" || !emailInput.value.includes('@') || !emailInput.value.includes('.') || emailInput.value.length < 10) {
    const p = document.createElement('p');
    p.className = 'error-p';
    p.appendChild(document.createTextNode('Please provide a valid email'));
    err.appendChild(p);
    p.style.display = 'block';

    document.querySelector('.subscription').style.overflow = 'hidden';

    // Change p color
    p.style.color = '#f96464';

    // Change border color
    emailInput.style.borderColor = '#f96464';

    // Display error icon
    document.querySelector('.error-icon').style.display = 'block';


   setTimeout(clearText, 2000);
  }else{
  console.log(emailInput.value);
  }
    e.preventDefault();
});

function clearText(){
  document.querySelector('.error-p').remove();
}

form.addEventListener('keyup', (e)=>{
  if(emailInput.value.includes('@') && emailInput.value.includes('.')){
    emailInput.style.borderColor = 'rgb(98, 60, 60, 0.2)';
  }
  document.querySelector('.error-icon').style.display = 'none';
})