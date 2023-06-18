var frame = 0;
var seconds = 1;
var loop = true;
var play = true;

function changeFrame() {
    if (play == true){
        frame += 1;
        let nextFrame = document.getElementById(`frame${frame + 1}`)
        if (nextFrame != null){
            let currentFrame = document.getElementById(`frame${frame}`)
            currentFrame.style.display = "none"
            nextFrame.style.display = "block"
        } else {
            if (loop == true){
                let currentFrame = document.getElementById(`frame${frame}`)
                currentFrame.style.display = "none"
                frame = 0;
                document.getElementById("frame1").style.display = "block"
            }
        } 
    }
}

setInterval(changeFrame, seconds * 1000);