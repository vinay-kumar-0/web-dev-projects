let i=0;
noOfButtons = document.querySelectorAll(".drum").length;
while(i<noOfButtons){
    document.querySelectorAll(".drum")[i].addEventListener("click", function (){
        var word = this.innerHTML;
        handleClick(word);
        buttonAnimation(word);
    });
    i=i+1;
}
function handleClick(key){
    
    switch(key){
        case "w":
            var audio = new Audio("sounds/kick-bass.mp3");
            audio.play();
            break;
        case "a":
            var audio = new Audio("sounds/crash.mp3");
            audio.play();
            break;
        case "s":
            var audio = new Audio("sounds/snare.mp3");
            audio.play();
            break;
        case "d":
            var audio = new Audio("sounds/tom-1.mp3");
            audio.play();
            break;
        case "j":
            var audio = new Audio("sounds/tom-2.mp3");
            audio.play();
            break;
        case "k":
            var audio = new Audio("sounds/tom-3.mp3");
            audio.play();
            break;
        case "l":
            var audio = new Audio("sounds/tom-4.mp3");
            audio.play();
            break;
    }
}

document.addEventListener("keypress", function (event){
    var key = event.key;
    handleClick(key.toLowerCase());
    buttonAnimation(key.toLowerCase());
});



function buttonAnimation(currentKey){
    var activebutton = document.querySelector("."+currentKey);
    activebutton.classList.add("pressed");
    setTimeout( function (){
        activebutton.classList.remove("pressed");
    }, 100);
}