import { validateEmail,isInputEmpty,isValidUsername, validatorWrapper, GenericBlurHandler, isValidPassword, doesPasswordMatch } from "./utils.js"

let userPassword = null;
let isSetOnceStateObj = {
    email:false,
    username:false,
    password:false,
    confirmPassword:false
}




const passwordElement = document.getElementById('password')

passwordElement.addEventListener('input',(e)=>{
    validatorWrapper(e,isValidPassword,isSetOnceStateObj)
})
passwordElement.addEventListener('blur',(e)=>[
    GenericBlurHandler(e,isValidPassword)
])


const confirmPasswordEle = document.getElementById('confirmPassword')

confirmPasswordEle.addEventListener('input',(e)=>{
    validatorWrapper(e,isValidPassword,isSetOnceStateObj)
})
confirmPasswordEle.addEventListener('blur',(e)=>{
    GenericBlurHandler(e,isValidPassword)
})


passwordElement.addEventListener('input',(e)=>{
    console.log("There")
    if(isSetOnceStateObj.password && isSetOnceStateObj.confirmPassword){
        console.log("here")
        const result = doesPasswordMatch()
        if(result){
            return
        }else{
            console.log("This was run")
            passwordElement.classList.remove('valid-form-input')
            confirmPasswordEle.classList.remove('valid-form-input')
            passwordElement.classList.add('invalid-form-input')
            confirmPasswordEle.classList.add('invalid-form-input')
        }
    }else{
        return
    }
})
confirmPasswordEle.addEventListener('input',(e)=>{
    console.log("There")
    if(isSetOnceStateObj.password && isSetOnceStateObj.confirmPassword){
        console.log("here")
        const result = doesPasswordMatch()
        if(result){
            passwordElement.classList.add('valid-form-input')
            confirmPasswordEle.classList.add('valid-form-input')
            return
        }else{
            console.log("This was run")
            passwordElement.classList.remove('valid-form-input')
            confirmPasswordEle.classList.remove('valid-form-input')
            passwordElement.classList.add('invalid-form-input')
            confirmPasswordEle.classList.add('invalid-form-input')
        }
    }else{
        return
    }
})

const formElementIds = [
    'email',
    'username',
    'password',
    'confirmPassword'
];



const form = document.getElementById('myForm')
form.addEventListener('submit',(e)=>{
    e.preventDefault()
    const email = document.getElementById('email').value
    const username = document.getElementById('username').value
    const password = document.getElementById('password').value
    const confirmPassword = document.getElementById('confirmPassword').value
    const dob = document.getElementById('dob').value
    const radioBtns = document.querySelectorAll('input[name="radioGroup"]')
    let selectedRadioBtn;
    radioBtns.forEach((radioBtn)=>{
        if(radioBtn.checked){
            selectedRadioBtn = radioBtn
        }
    })
    selectedRadioBtn = selectedRadioBtn.value
    console.log('Form Submitted!!')
    const formDataObject = {
        email,
        username,
        password,
        confirmPassword,
        dob,
        gender:selectedRadioBtn
    }
    console.log("The following object can be sent to the server",formDataObject)
})



const emailInputElement = document.getElementById('email')
emailInputElement.addEventListener('input',(e)=>{
    validatorWrapper(e,validateEmail,isSetOnceStateObj)
})
emailInputElement.addEventListener('blur',(e)=>{
    GenericBlurHandler(e,validateEmail)
})

const usernameElement = document.getElementById('username')
usernameElement.addEventListener('input',(e)=>{
    validatorWrapper(e,isValidUsername,isSetOnceStateObj)
})
usernameElement.addEventListener('blur',(e)=>{
    GenericBlurHandler(e,isValidUsername)
})