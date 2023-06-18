var frame = 1;
var seconds = 0.5;
var loop = true;
var play = true;
const numberOfFrames = 17;
document.getElementById("frameslider").max = numberOfFrames;
const loop_checkbox = document.getElementById('loop')
loop_checkbox.checked = loop;

function changeFrame() {
    if (play == true){
        frame += 1;
        if (frame <= numberOfFrames){
            let nextFrame = document.getElementById(`frame${frame}`)
            let currentFrame = document.getElementById(`frame${frame-1}`)
            currentFrame.style.display = "none"
            nextFrame.style.display = "block"
            document.getElementById("frameslider").value = frame;
        } else {
            if (loop == true){
                let currentFrame = document.getElementById(`frame${numberOfFrames}`)
                currentFrame.style.display = "none"
                frame = 1;
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

function changeSlider(val) {
    play_function()
    let oldFrame = frame;
    document.getElementById(`frame${oldFrame}`).style.display = "none"
    frame = val;
    document.getElementById(`frame${frame}`).style.display = "block"
    play_function()
}

function changeSeconds(ele) {
    if(event.key === 'Enter') {
        seconds = parseFloat(ele.value);
        clearInterval(refreshIntervalId);
        refreshIntervalId = setInterval(changeFrame, seconds * 1000);
    }
}

// function changeSeconds(){
//     clearInterval(refreshIntervalId);
// }

var refreshIntervalId = setInterval(changeFrame, seconds * 1000);