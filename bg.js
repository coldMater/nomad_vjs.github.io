const body = document.querySelector("body");

const IMAGE_NUBER = 13;

function genRandom(){
    return Math.floor(Math.random() * IMAGE_NUBER)
}

function paintImage(imgNumber) {
    const image = new Image();
    image.src = `./images/${imgNumber + 1}.jpg`
    image.classList.add("bgImage");
    body.prepend(image);
}

function init() {
    paintImage(genRandom());
}

init();