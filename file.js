const body = document.body
const heading = document.querySelector('h2')
const start = document.querySelector('.start')
start.addEventListener('click',(e)=>{
    const red = Math.floor(Math.random()*226)
    const green = Math.floor(Math.random()*226)
    const blue = Math.floor(Math.random()*226)
    const rgb = `rgb(${red},${green},${blue})`
    const id1 = setTimeout(() => {
        body.style.backgroundColor = rgb
        heading.textContent = rgb
        start.textContent = 'Change'
        heading.style.border = '2px solid black'
        heading.style.fontFamily = 'sans-serif'
    }, 0);
})