/** @format */

const submitBtn = document.getElementById('submit')
const firstName = document.querySelector('.first-name-input')
const lastName = document.querySelector('.last-name-input')
const email = document.getElementById('email')
const radioGeneral = document.getElementById('general')
const radioSupport = document.getElementById('support')
const textArea = document.querySelector('textarea')
const checkBox = document.querySelector('.check-box')
let radioButtonIsClicked = false

radioGeneral.addEventListener('click', () => {
	radioGeneral.parentElement.classList.add('active')
	radioSupport.checked = false
	radioSupport.parentElement.classList.remove('active')
    radioButtonIsClicked = true
})
radioSupport.addEventListener('click', () => {
	radioSupport.parentElement.classList.add('active')
	radioGeneral.checked = false
	radioGeneral.parentElement.classList.remove('active')
    radioButtonIsClicked = true
})

submitBtn.addEventListener('click', (e) => {
	e.preventDefault();
    if(!firstName.validity.valid){
        firstName.parentElement.querySelector('.error').style.display = 'block'
        firstName.classList.add('er')
    }else if(!lastName.validity.valid){
        lastName.parentElement.querySelector('.error').style.display = 'block'
        lastName.classList.add('er')
    }else if(email.value == ''){
        email.parentElement.querySelector('.error').style.display = 'block'
        email.classList.add('er')
    }else if(!email.validity.valid){
        email.parentElement.querySelector('.email-err').style.display = 'block'
        email.classList.add('er')
    }else if (radioButtonIsClicked === false) {
		document.getElementById('radio-err').style.display = 'block'
	} else if (!textArea.validity.valid) {
		document.getElementById('text-area-err').style.display = 'block'
		textArea.classList.add('er')
	} else if (!checkBox.checked) {
		document.getElementById('check-box-err').style.display = 'block'
	}  else {
		document.getElementById('text-area-err').style.display = 'none'
		textArea.classList.remove('er')
		document.getElementById('radio-err').style.display = 'none'
		firstName.classList.remove('er')
        lastName.classList.remove('er')
        email.classList.remove('er')
        document.querySelectorAll('.error').forEach(el=> el.style.display = 'none')
        document.querySelector('.email-err').style.display = 'none'
        document.querySelector('form').reset();
        document.querySelector('.success-state').style.transform = 'translateY(0)'
        document.querySelector('.active').classList.remove('active')
        function removeMsg(){
             document.querySelector('.success-state').style.transform ='translateY(-200px)';
        }
        setTimeout(removeMsg,2000)
	}
})
