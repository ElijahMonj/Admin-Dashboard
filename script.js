
function dislike(){
    document.getElementById("dislike").style.filter="invert(12%) sepia(96%) saturate(4344%) hue-rotate(10deg) brightness(104%) contrast(118%)";
}

var star =document.getElementsByClassName('favorite');
console.log(star);
let favstar=Array.from(star);
console.log(favstar);
favstar.forEach(v => v.addEventListener('click', function() {  
v.style.filter = "invert(88%) sepia(34%) saturate(6897%) hue-rotate(3deg) brightness(106%) contrast(108%)";   
}));

var dislike =document.getElementsByClassName('dislike');
console.log(dislike);
let td=Array.from(dislike);
console.log(td);
td.forEach(d => d.addEventListener('click', function() {  
d.style.filter ="invert(12%) sepia(96%) saturate(4344%) hue-rotate(10deg) brightness(104%) contrast(118%)";
}));