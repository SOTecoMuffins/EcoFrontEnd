var previousMode = "walk";

function hello() {
    console.log('test')
}

function removeStyle(){
    var previous = document.getElementById(previousMode);
    previous.classList.remove("highlightedIcon");
}

function addStyle(){
    var current = document.getElementById(previousMode);
    current.classList.add("highlightedIcon");
}

function onClickMode(mode){
    removeStyle();
    previousMode = mode;
    addStyle();
}

