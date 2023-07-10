export function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}
export function isInputEmpty(event) {
    const element = event.target
    const text = event.target.value
    if(!text.length){
        if(!element.classList.contains('invalid-form-input')){
            element.classList.add('invalid-form-input')
        }
    }
}


export function doesPasswordMatch(){
    const passwordElementOne = document.getElementById('password');
    const passwordElementTwo = document.getElementById('confirmPassword');
    const passwordFromElementOne = passwordElementOne.value
    const passwordFromElementTwo = passwordElementTwo.value
    const passwordOneLength = passwordFromElementOne.length
    const passwordTwoLength = passwordFromElementTwo.length
    
    console.log("this is it",passwordFromElementOne,passwordFromElementTwo)
    if(passwordFromElementOne === passwordFromElementTwo){
        console.log("is this a joke")
        return true
    }else {
        return false
    }
}




export function isValidPassword(password){
    const regex = /^(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]+$/;
    if (password.length >= 8){
        const result = regex.test(password)
        return result
    }
    return false;
}

export function isValidUsername(username){
    if(username.length >= 4){
        return true;
    }else {
        return false;
    }
}


export function validatorWrapper(e,validatorFunction,stateObj){
    const element = e.target;
    const elementId = element.id;
    const text = e.target.value;
    const result = validatorFunction(text)
    if(result){
        stateObj[`${elementId}`] = true
        element.classList.add('valid-form-input')
    }else{ 
        if(stateObj[`${elementId}`]){
            element.classList.remove('valid-form-input')
            element.classList.add('invalid-form-input')
        }
    }
}

export function GenericBlurHandler(e,validatorFunction){
    const text = e.target.value;
    const result = validatorFunction(text)
    if(result){
        return
    }
    else {
        const element = e.target 
        element.classList.add("invalid-form-input")
    }
}
