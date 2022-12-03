let links=document.querySelectorAll('.link');
let listOfLink=[...links];
console.log(listOfLink);
listOfLink.map(link=>{
    link.addEventListener('click',()=>{
        listOfLink.forEach(l=>l.classList.remove('active'));
        link.classList.toggle('active');
    })
})