 let moreitems=document.querySelector('.moreitems');
 moreitems.addEventListener('click', function() {
    let ap = document.querySelector('.item2');
    if (ap.style.display == "none") {
        ap.style.display = "block";
        let btn=document.querySelector('button');
        btn.style.display = "none";
    } else {
        ap.style.display = "none";
    }
});
 let phone=document.querySelector('.phonemenu');
 phone.addEventListener('click', function() {
    let a = document.querySelector('nav ul');
    if(a.classList.contains("active"))
    {
        a.classList.remove('active');
    }
    else{
        a.classList.add('active');
    }
});
let p = document.querySelector('#head p');
let i = 0;
let text = "Discover the best food & drinks in Delhi NCR";
function typeWriter() {
    if (i < text.length) {
        p.innerHTML = p.innerHTML + text.charAt(i);
        i++;
        setTimeout(typeWriter, 100);
    }
}
typeWriter();

let box = document.querySelectorAll('.box');
box.forEach(i => {
i.addEventListener('mouseover', function (){
    i.classList.add('visible');
});
    i.addEventListener('mouseout', function() {
        i.classList.remove('visible');
});
});


 let cards = document.querySelectorAll('.customer-card .card-inner');
 cards.forEach(i => {
    i.addEventListener('click', () => {
    if(i.classList.contains("flip"))
    {
        i.classList.remove('flip');
    }
    else{
        i.classList.add('flip');
    }
    });
});
