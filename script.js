var frame = 0;

function changeFrame() {
    frame += 1;
    let nextFrame = document.getElementById(`frame${frame + 1}`)
    if (nextFrame != null){
        let currentFrame = document.getElementById(`frame${frame}`)
        currentFrame.style.display = "none"
        nextFrame.style.display = "block"
    }
    let currentFrame = document.getElementById(`frame${frame}`)

}

setInterval(changeFrame, 1000);