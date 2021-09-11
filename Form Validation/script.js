const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const password2 = document.getElementById("password2");

function success(input){
    const formControl = input.parentElement;
    formControl.className = "form-control success"
}

function failure(input,message){
    const formControl = input.parentElement;
    formControl.className = "form-control error";
    const errorMessage = formControl.querySelector("small");
    errorMessage.innerText = message;
}

function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if( re.test(email.value)){
        success(email);
    }
    else{
        failure(email,"Please enter a valid email address")
    }
    
}
const takeInputName = inpName => {
    const name = inpName.id;
     return name.charAt(0).toUpperCase() + name.slice(1);
}

const checkInput = inputArr =>{
    inputArr.forEach(element => {
        if(element.value.trim()==='')
        {
            failure(element,`${takeInputName(element)} is required`);
        }
        else{
            success(element);
        }
    });
}
const checkLength = (input,min,max) =>{
    if(input.value.length < min)
    {
        failure(input,`${takeInputName(input)} should be minimum ${min} letters`)
    }
    else if(input.value.length > max)
    {
        failure(input,`${takeInputName(input)} should be maximum ${max} letters`)
    }
    else{
        success(input);
    }
}
const checkPassword = (password,password2)=>{
    console.log(password);
    console.log(password2);
    if(password.value === password2.value)
    success(password);
    else
    failure(password2,"Entered passwords dont match")
}
// event listeners
form.addEventListener("submit",function(event){
event.preventDefault();    
checkInput([username,email,password,password2]);
checkPassword(password,password2)
checkLength(username,3,15);
checkLength(password,6,20);
checkLength(password2,6,20);
validateEmail(email);
})
