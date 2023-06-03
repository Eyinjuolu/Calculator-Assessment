const solve = document.querySelector(".solve")
const result = document.querySelector(".result")
const button = document.querySelectorAll(".num")
const equal = document.querySelector(".equal")
const clear = document.querySelector(".clear")
// const value = document.querySelector(".value")
// const value = document.querySelector(".value")

button.forEach((button) => {
    button.addEventListener("click", () =>{
        solve.textContent += button.textContent
    })
})
equal.addEventListener("click", ()=> {
    result.textContent = eval(solve.textContent)
    
})
clear.addEventListener("click",() =>{
    solve.textContent = ""
    result.textContent = 0
})

