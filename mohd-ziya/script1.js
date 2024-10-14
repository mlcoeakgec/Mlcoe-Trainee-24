let b= document.getElementById("bars");
let c=document.getElementById("games");
let bu=document.getElementById("buggy");
let z=document.querySelectorAll('p');
let zi=document.querySelectorAll(".photo");
let button=document.querySelector(".but");


console.log(z);
console.log(zi);
window.addEventListener('scroll',()=>{
    let value=window.scrollY;
    b.style.bottom=value*1.5+'px';
    c.style.bottom=value*1.5+'px';
    bu.style.bottom=value*1.5+'px';
    bu.style.right=value*1.5+'px';

    for(let p of z){
    p.style.bottom=value*1.5+'px';
    }
   
});
button:addEventListener("click",()=>{
        alert("form submitted");
});
