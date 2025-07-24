let flag = 0;

slidshow(flag);

function nextImg(x){
    flag = flag + x;
    slidshow(flag);
}

function slidshow(num){
    
let slides = document.getElementsByClassName('slide');
if(num == slides.length){
    num = 0;
    flag = 0;
}else if (num<0){
    flag = slides.length -1;
    num = slides.length -1;
}
for(let y of slides){
    y.style.display = 'none';
}
slides[num].style.display  = "block";
}

