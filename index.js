let screen=document.querySelector(".screen");
minus=document.querySelector(".minus");
plus=document.querySelector(".plus");


let a=0;
plus.addEventListener("click", ()=>{
    a++;
    screen.innerText=a;
    console.log(a);
    
})
minus.addEventListener("click", ()=>{
    a--;
    screen.innerText=a;
    console.log(a);
    
})

