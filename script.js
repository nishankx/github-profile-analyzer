import { fetchData } from "./scripts/fetchData.js"
import { getAnalytics} from "./scripts/getAnalytics.js"
import { renderAnalytics } from "./scripts/renderAnalytics.js"

const inputEl = document.getElementById('input-el')
const submitEl = document.getElementById('submit-el')
const resultEl = document.getElementById('result')
const getStarted = document.getElementById('start')
const mainEngine = document.getElementById('main-engine')

getStarted.addEventListener('click', function(){
    mainEngine.scrollIntoView({behavior: 'smooth'})
})

submitEl.addEventListener('click', async function() {
    const username = inputEl.value
    document.getElementById('fun').innerHTML = ""

    if(username === 'nishankx') {
        creatorIsOP()
    }

    if(username === 'Poshith14') {
        funny()
    }

    if(username){
        const UserData = await fetchData(username)
        console.log(UserData)
        const resultArr = getAnalytics(UserData)
        resultEl.innerHTML = renderAnalytics(resultArr)
        resultEl.scrollIntoView({ behavior: 'smooth' });
    }
})

function creatorIsOP(){
    const hiddenJoke = document.getElementById('fun')
    hiddenJoke.innerHTML = `
        <h1>OP is the MOST AWESOME</h1>
        <p>I am Watching You</p>
        <img src="https://media.tenor.com/VCuB7vcBW7wAAAAM/awesome-im.gif">
    `
}

function funny(){
    const hiddenJoke = document.getElementById('fun')
    hiddenJoke.innerHTML = `
        <h1>Hey DO-DO Face 😈</h1>
        <p>You a certified dingleberry harvester</p>
        <img src="https://media2.giphy.com/media/v1.Y2lkPTZjMDliOTUyOG05ZjV6ZGZsdW5rZnc5bWhhZTNvc2ZnemFhZ3VlaXhnanlkZHp6NCZlcD12MV9naWZzX3NlYXJjaCZjdD1n/fb5lozVxhBwVFFByW8/200w.gif">
    `
}