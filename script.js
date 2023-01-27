let decrement = document.getElementById("decrement")
let number = document.getElementById("number")
let increment = document.getElementById("increment")
let reset = document.getElementById("reset")


decrement.addEventListener("click",() => {
    number.innerHTML--
})

increment.addEventListener("click",() => {
    number.innerHTML++
})

reset.addEventListener("click",() => {
    number.innerHTML = "0";
})