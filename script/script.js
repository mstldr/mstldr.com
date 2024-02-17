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

function redirect(){
    window.location.href = "wcf.html"; 
}

function toggleContent() {
    var content = document.getElementById("content");
    if (content.style.display === "none") {
        content.style.display = "block";
    } else {
        content.style.display = "none";
    }
}

document.getElementById("footerPlacement").innerHTML = "<p>Hey, I'm still working on this website</p>"
document.getElementById("headerPlacement").innerHTML = "<h3 id=\"logo\">MSTLDR</h3><nav id=\"menu\"><a href=\"index.html\">Home</a><a href=\"\">About</a><a href=\"\">Contact</a></nav>"