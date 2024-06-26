let monthname=document.getElementById("month-name")
let dayname=document.getElementById("day-name")
let daynumber=document.getElementById("day-number")
let year=document.getElementById("year")

let date=new Date()
let month =date.getMonth()
console.log(month);
monthname.innerHTML= date.toLocaleString("en",{
    month:"long"
})
dayname.innerText=date.toLocaleDateString("en",{
    weekday:"long"
})
daynumber.innerText=date.getDate()
year.innerText=date.getFullYear();




