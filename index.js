const input = document.getElementById('emailSpace');
const subscribe = document.getElementById('sub');
const page2 = document.getElementsByClassName('hide')[0]
const page1 = document.getElementsByClassName('container')[0]
const span = document.getElementById('fill')
const mailformat = /^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w{2,3})+$/;
const error = document.getElementById('invalid')


function proceed() {
    if (input.value.match(mailformat)) {
        page2.setAttribute('class', 'container2')
        page1.replaceWith(page2)
        span.innerText = input.value
    } else {
        error.setAttribute('class', 'invalid')
        input.classList.add('imail')
        error.style.color = 'red'
        subscribe = null
    }
}

subscribe.addEventListener('click', proceed)

input.addEventListener('keypress', function(event) {
    if (event.keyCode === 13) {
        proceed()
    }
})


