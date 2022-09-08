let ErrorMsg = document.getElementById("ErrorMsg");
let ErrorIcon = document.getElementById("ErrorIcon");
let EmailInput = document.getElementById("EmailBox");
let ArrowButton = document.getElementById("ArrowButton");
let ValidEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

ArrowButton.addEventListener('click', ()=>{
    if(EmailInput.value.match(ValidEmail))
    {
        ErrorMsg.style.display = "none"
        ErrorIcon.style.display = "none"
    }
    else{
        ErrorMsg.style.display = "block"
        ErrorIcon.style.display = "block"
    }
});