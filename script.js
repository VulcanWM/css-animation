var frame = 0;
var seconds = 1;
var loop = true;
var play = true;
const numberOfFrames = 4;
document.getElementById("frameslider").max = numberOfFrames;
const loop_checkbox = document.getElementById('loop')
loop_checkbox.checked = loop;

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
            if (loop == true){
                let currentFrame = document.getElementById(`frame${numberOfFrames}`)
                currentFrame.style.display = "none"
                frame = 0;
                document.getElementById("frame1").style.display = "block"
                document.getElementById("frameslider").value = 1;
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

loop_checkbox.addEventListener('change', (event) => {
    if (event.currentTarget.checked) {
       loop = true;
    } else {
       loop = false;
    }
})

function myFunction(val) {
    play_function()
    console.log(frame);
    let oldFrame = frame;
    document.getElementById(`frame${oldFrame + 1}`).style.display = "none"
    frame = val-1;
    document.getElementById(`frame${frame + 1}`).style.display = "block"
    play_function()
}

setInterval(changeFrame, seconds * 1000);