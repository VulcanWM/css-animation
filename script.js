var frame = 0;
var loop = true;

function changeFrame() {
    frame += 1;
    console.log(frame)
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

setInterval(changeFrame, 1000);