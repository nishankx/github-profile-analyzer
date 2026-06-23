import { fetchData } from "./scripts/fetchData.js"
import { getAnalytics} from "./scripts/getAnalytics.js"
import { renderAnalytics } from "./scripts/renderAnalytics.js"

const inputEl = document.getElementById('input-el')
const submitEl = document.getElementById('submit-el')
const resultEl = document.getElementById('result')

submitEl.addEventListener('click', async function() {
    const username = inputEl.value
    const UserData = await fetchData(username)
    console.log(UserData)
    const resultArr = getAnalytics(UserData)
    resultEl.innerHTML = renderAnalytics(resultArr)
    resultEl.scrollIntoView({ behavior: 'smooth' });
})
