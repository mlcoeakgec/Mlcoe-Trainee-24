let train = document.getElementById("heart");
window.addEventListener("scroll",()=>{
    let value=window.scrollY;
train.style.left= value*1.5 +"px";
})
function myFunction(){
    var dots = document.getElementById("dots");
    var moreText =  document.getElementById("more");
    var btnText=  document.getElementById("bton");
    if(dots.style.display=== "none")
    {
        dots.style.display= "inline";
        btnText.innerHTML= "Read more";
        moreText.style.display="none";
    }
    else{
        dots.style.display= "none";
        btnText.innerHTML= "Read less";
        moreText.style.display="inline";
    }
}