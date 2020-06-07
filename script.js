const TOTAL_TIME = 7500
const BREATHE_TIME = (TOTAL_TIME / 5) * 2
const HOLD_TIME = TOTAL_TIME / 5

const container = document.querySelector('.container')
const circle = document.querySelector('.circle')
const text = document.getElementById('text')
const pointerContainer = document.querySelector('.pointer-container')
const audio = document.querySelector('audio')

function breatheAnimation() {
    text.innerHTML = 'Breathe In..'
    container.className = 'container grow'
    pointerContainer.classList.add('moving')

    setTimeout(() => {
        text.innerText = 'Hold'
        container.className = 'container hold'
        setTimeout(() => {
            text.innerText = 'Breathe Out..'
            container.className = 'container shrink'
        }, HOLD_TIME)
    }, BREATHE_TIME)
}

function start() {
    text.removeEventListener('click', start)
    circle.removeEventListener('click', start)
    audio.play()
    breatheAnimation()
    setInterval(breatheAnimation, TOTAL_TIME)
}

text.addEventListener('click', start)
circle.addEventListener('click', start)
