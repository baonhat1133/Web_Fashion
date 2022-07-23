const surveyClose=document.getElementById('survey-close');
const surveyBox=document.querySelector('.survey-box');
const surveyClick=document.getElementById('survey-click');

surveyClick.addEventListener('click',function(){
    surveyBox.style.display = "flex"
});
surveyClose.addEventListener('click',function(){
    surveyBox.style.display = "none"
});

/* ============Slider========= */
const rightarrow=document.querySelector('.fa-chevron-right');
const leftarrow=document.querySelector('.fa-chevron-left');
const imgAll=document.querySelectorAll('.slider-content-left-top img');
var lenImg=imgAll.length;
var index=0;
rightarrow.addEventListener('click',function(){
    if(index>=lenImg-1) index=0;
    else index+=1;
    document.querySelector(".slider-content-left-top").style.right =`${index*100}%`;//index*100+"%"
})
leftarrow.addEventListener('click',function(){
    if(index<=0) index=lenImg-1;
    else index-=1;
    document.querySelector(".slider-content-left-top").style.right =`${index*100}%`;
})
//Slider-bottom-title
const titleLi=document.querySelectorAll('.slider-content-left-bottom ul li');//querySelector nó chỉ lấy phần tử đầu tiên thẻ li
const active=document.querySelector('.active');
console.log(active)
titleLi.forEach((img,index)=>{
   img.addEventListener('click',function(){
    document.querySelector(".slider-content-left-top").style.right =`${index*100}%`;
    document.querySelector('.active').classList.remove('active');
    img.classList.add('active');
   })
})
var index1=0;
//Slider-auto-move
setInterval(()=>{
    if(index>=lenImg-1) index=0;
    else index+=1;
    document.querySelector(".slider-content-left-top").style.right =`${index*100}%`;//index*100+"%"
    document.querySelector('.active').classList.remove('active');
    titleLi[index].classList.add('active');
},3000)

// //Button more
// const btnMore=document.querySelector('.btn-more');
// btnMore.addEventListener('click',()=>{
//     document.querySelector('.content-bestsell-more').style.display="block";
//     btnMore.style.display="none";
// })

