const surveyClose=document.getElementById('survey-close');
const surveyBox=document.querySelector('.survey-box');
const surveyClick=document.getElementById('survey-click');

surveyClick.addEventListener('click',function(){
    surveyBox.style.display = "flex"
});
surveyClose.addEventListener('click',function(){
    surveyBox.style.display = "none"
});
