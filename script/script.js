function showVerification(isLogin){
    let mainElement = document.querySelector('main');
    let allElements = mainElement.querySelectorAll('main > section');

    allElements.forEach((element) => element.classList.add('hidden'));
    
    if(isLogin){
        let loginPanel = document.getElementsByClassName('loginPanel')[0];
        loginPanel.classList.remove('hidden');
    }
    else{
        let registrationPanel = document.getElementsByClassName('registrationPanel')[0];
        registrationPanel.classList.remove('hidden');
    }
}

function closeVerification(){
    let loginPanel = document.getElementsByClassName('loginPanel')[0];
    let registrationPanel = document.getElementsByClassName('registrationPanel')[0];

    let mainElement = document.querySelector('main');
    let allElements = mainElement.querySelectorAll('main > section');

    allElements.forEach((element) => element.classList.remove('hidden'));
    loginPanel.classList.add('hidden');
    registrationPanel.classList.add('hidden');

}

document.getElementById("footerPlacement").innerHTML = "<p>Here's something about us. Our info and contact</p>"
document.getElementById("headerPlacement").innerHTML = "<h3 id=\"logo\">MSTLDR</h3><nav id=\"menu\"><a href=\"index.html\">Home</a><a href=\"\">About</a><a href=\"\">Blog</a></nav>"