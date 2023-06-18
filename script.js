var frame = 0;
var seconds = 1;
var loop = true;
var play = true;
const numberOfFrames = 4;
document.getElementById("frameslider").max = numberOfFrames;

function changeFrame() {
    if (play == true){
        frame += 1;
        if (frame < numberOfFrames){
            let nextFrame = document.getElementById(`frame${frame + 1}`)
            let currentFrame = document.getElementById(`frame${frame}`)
            currentFrame.style.display = "none"
            nextFrame.style.display = "block"
            document.getElementById("frameslider").value = frame + 1;
        } else {
            document.getElementById("frameslider").value = 1;
            if (loop == true){
                let currentFrame = document.getElementById(`frame${frame}`)
                currentFrame.style.display = "none"
                frame = 0;
                document.getElementById("frame1").style.display = "block"
            }
        } 
    }
}

function play_function(){
    let button = document.getElementById("play")
    if (button.innerText == "⏸︎"){
        play = false;
        button.innerText = "⏵︎"
    } else {
        play = true;
        button.innerText = "⏸︎"
    }
}

setInterval(changeFrame, seconds * 1000);