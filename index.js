// Buttons
const displayNameButton=document.querySelector('#display-name-button');

displayNameButton.addEventListener('click', ()=>{
    const displayNameAlert=document.querySelector('#display-name');
    displayNameAlert.classList.remove('invisible');
})
// Mouse Over
const lightBulb=document.querySelector('#light-bulb');
lightBulb.addEventListener('mouseover', ()=>{
    lightBulb.src='images/light-bulb-on.png';
})
lightBulb.addEventListener('mouseleave', ()=>{
    lightBulb.src='images/light-bulb-off.png';
})
// Toggle
const toggleButton=document.querySelector('#toggle-button');
toggleButton.addEventListener('click', ()=>{
    const alertMessage=document.querySelector('#toggle-alert');
    if (alertMessage.classList.contains('invisible')){
        alertMessage.classList.remove('invisible');
    } else {
        alertMessage.classList.add('invisible');
    }
    
})
// Validate
// Use bootstrap validation: https://getbootstrap.com/docs/4.5/components/forms/#server-side
const validateForm=document.querySelector('#form-validate');
const checkValidation=document.querySelector('#form-validate-first-name');
validateForm.addEventListener('submit', (e)=>{
    e.preventDefault();
    if (checkValidation.value.length>2) {
        checkValidation.classList.add('is-valid');
        checkValidation.classList.remove('is-invalid');
    } else {
        checkValidation.classList.add('is-invalid'); 
        checkValidation.classList.remove('is-valid');
        }
    })


// Challenge: Lists
const hobbyForm=document.querySelector('#form-hobby');
hobbyForm.addEventListener('submit', (e)=>{
    e.preventDefault();
    const hobbyListUl=document.querySelector('#hobby-list');
    const hobbyText=document.querySelector('#form-hobby-text');
    const li=document.createElement('li');
    li.classList.add('list-group-item');
    li.innerText=hobbyText.value;
    hobbyListUl.appendChild(li);
    
})

// Challenge: Lists (Part 2)
const removeList=document.querySelector('#hobby-list-2');
removeList.addEventListener('click', (e)=>{
    if (e.target.classList.contains('remove-hobby')){
        e.preventDefault();
        // removeList.removeChild(e.target.parentElement);
        e.target.parentElement.remove();
    }
})
