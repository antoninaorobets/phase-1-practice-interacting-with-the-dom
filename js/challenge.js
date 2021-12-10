//document.addEventListener("DOMContentLoaded", init)

const counterH1 = document.querySelector("#counter"); //h1
let counter = parseInt(counterH1.textContent)

document.querySelector("#plus").addEventListener('click', increaseCounter)
document.querySelector("#minus").addEventListener('click', decreaseCounter)
document.querySelector("#heart").addEventListener('click', likeNumber)

document.querySelector("#pause").addEventListener('click', pause)
document.querySelector("#comment-form").addEventListener('submit', addComment)

let counterID = startCounter()

function startCounter() {

    let intervalID = setInterval(() => {
        counter = counter + 1
        counterH1.textContent = counter
    }, 1000)
    return intervalID;
}

let poused = false;
function pause() {
    const btn = document.querySelector("#pause");
    if (!poused) {
        clearInterval(counterID)
        btn.textContent = "resume"
        disableBtn (true)
        poused = true;
    }
    else {
        counterID = startCounter()
        btn.textContent = "pause"
        disableBtn (false)
        poused = false;   
    }

}
function disableBtn (state) {
    document.querySelector("#plus").disabled = state;
    document.querySelector("#minus").disabled = state;
    document.querySelector("#heart").disabled = state;
    document.querySelector("#submit").disabled = state;
}


function increaseCounter() {
    counter = counter + 1;
    counterH1.textContent = counter;
}

function decreaseCounter(){
    counter = counter - 1;
    counterH1.textContent = counter;
}

function likeNumber() {
    const likeRecord = document.createElement('li');
    likeRecord.textContent = `I liked ${counter}`
    document.querySelector('.likes').appendChild(likeRecord);
}

function addComment(event) {
    event.preventDefault()
    const comment = document.createElement('p')
    comment.textContent = event.target.querySelector('input').value
    document.querySelector('#list').appendChild(comment)
    event.target.reset()
}