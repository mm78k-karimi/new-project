const fitureSlider = document.getElementById('fiture-slider-btn');
const mobileFitureSlider = document.getElementById('mobile-fiture-slider-btn');
const fitureCards = document.querySelectorAll('.fiture-card')
const mobileFitureBtn = document.querySelectorAll('.mobile-fiture-slider-btn')
const fitureCardElement = document.getElementById('fitures-container')

let groupNumber = 1

fitureSlider.addEventListener('click' , fitureShow)

function fitureShow(e) {
  
  if( e.target.className == "group-btn"){
    for (let i = 0 ; i < fitureCards.length ; i ++) {
      fitureCards[i].style = "display : none"
    }
  
    if(e.target.id == "group2") {
      
      fitureCards[3].style = " display : block"
      fitureCards[4].style = " display : block"
      fitureCards[5].style = " display : block"
      
      document.getElementById('group1').style = "width : 20px ; margin:1px ; background:  rgb(33, 150, 245)"
      document.getElementById('group3').style = "width : 20px ; margin:1px ; background:  rgb(33, 150, 245)"
      e.target.style = "width : 40px ; margin: 5px ; background: #388e3c" 
      return groupNumber = 2;
      
    } else if(e.target.id == "group1") {
      fitureCards[0].style = " display : block"
      fitureCards[1].style = " display : block"
      fitureCards[2].style = " display : block"
      
      document.getElementById('group2').style = "width : 20px ; margin:1px ; background: rgb(33, 150, 245)"
      document.getElementById('group3').style = "width : 10px ; margin:1px ; background: rgb(33, 150, 245)"
      e.target.style = "width : 40px ; margin: 5px ; background: #388e3c" 
      return groupNumber = 1;
    }else if(e.target.id == "group3") {
      fitureCards[6].style = " display : block"
      fitureCards[7].style = " display : block"
      fitureCards[8].style = " display : block"
      
      document.getElementById('group1').style = "width : 10px ; margin:1px ; background: rgb(33, 150, 245)"
      document.getElementById('group2').style = "width : 20px ; margin:1px ; background: rgb(33, 150, 245)"
      e.target.style = "width : 40px ; margin: 5px ; background: #388e3c" 
      return groupNumber = 3;
  
    }
  }
}

// Slide with pull touch
fitureCardElement.addEventListener('mousedown' , firstLocation)
fitureCardElement.addEventListener('mouseup' , secondLocation)
fitureCardElement.addEventListener('mouseup' , pullTouchSlide)

function firstLocation(e){
  return xd = e.pageX
}
function secondLocation(e){
  return xu = e.pageX
}
function pullTouchSlide(e){

  if (window.innerWidth > 600) {
    if ((xu - xd) >= 20){
      groupNumber = groupNumber -1 
      if (groupNumber == 0){
        groupNumber = 3;
      }
    }else if ((xu - xd) <= -20){
      groupNumber = groupNumber + 1
      if (groupNumber==4){
        groupNumber = 1;
      }
    }else {
      return;
    }
  
    for(let m = 0 ; m < 9 ; m ++){
      fitureCards[m].style = " display : none"
    }
  
    if(groupNumber == 1) {
      fitureCards[0].style = " display : block"
      fitureCards[1].style = " display : block"
      fitureCards[2].style = " display : block"
      
      document.getElementById('group1').style = "width : 40px ; margin:1px ; background: #388e3c"
      document.getElementById('group2').style = "width : 20px ; margin:1px ; background: rgb(33, 150, 245)"
      document.getElementById('group3').style = "width : 10px ; margin:1px ; background: rgb(33, 150, 245)"
    }else if (groupNumber == 2) {
      fitureCards[3].style = " display : block"
      fitureCards[4].style = " display : block"
      fitureCards[5].style = " display : block"
      
      document.getElementById('group1').style = "width : 20px ; margin:1px ; background:  rgb(33, 150, 245)"
      document.getElementById('group2').style = "width : 40px ; margin:1px ; background:  #388e3c"
      document.getElementById('group3').style = "width : 20px ; margin:1px ; background:  rgb(33, 150, 245)" 
    }else if (groupNumber == 3){
      fitureCards[6].style = " display : block"
      fitureCards[7].style = " display : block"
      fitureCards[8].style = " display : block"
      
      document.getElementById('group1').style = "width : 10px ; margin:1px ; background: rgb(33, 150, 245)"
      document.getElementById('group2').style = "width : 20px ; margin:1px ; background: rgb(33, 150, 245)"
      document.getElementById('group3').style = "width : 40px ; margin:1px ; background: #388e3c"
    }
  }

}





// Mobile fiture show onClick

mobileFitureSlider.addEventListener('click' , mobileFitureShow)

function mobileFitureShow (e){
  if (e.target.className.indexOf('mobile-fiture-slider-btn') != -1 ){
    for (let j = 0 ; j < mobileFitureBtn.length ; j++) {
      mobileFitureBtn[j].style = "transform:scale(1) ; background: rgb(33, 150, 245)" 
    }  
    e.target.style = "transform:scale(1.2) ; background:#4caf50"
    num = Number(e.target.id.slice(-1))
    for (let i = 0 ; i < fitureCards.length ; i++){
      fitureCards[i].style = "display : none !important";
    }  
    fitureCards[num-1].style = "display : block !important"

  }  
}  

// Mobile fiture show pullTouch 

fitureCardElement.addEventListener('touchstart',mFirstLocation)
fitureCardElement.addEventListener('touchend' , mSecondLocation)
fitureCardElement.addEventListener('touchend' , mPullTouchSlide)

let mGroupNumber = 1


function mFirstLocation(e){
  return xd = e.touches[0].pageX
}
function mSecondLocation(e){
  return xu = e.changedTouches[0].pageX
}
function mPullTouchSlide(e){

  if(window.innerWidth <= 600){
    if ((xu - xd) >= 20){
      mGroupNumber = mGroupNumber -1 
      if (mGroupNumber == 0){
        mGroupNumber = 9;
      }
    }else if ((xu - xd) <= -20){
      mGroupNumber = mGroupNumber + 1
      if (mGroupNumber==10){
        mGroupNumber = 1;
      }
    }else {
      return;
    }
    for(let m = 0 ; m < 9 ; m ++){
      fitureCards[m].style = " display : none !important"
    }
    fitureCards[mGroupNumber-1].style = " display : block !important"
    for(let n = 0 ; n < 9 ; n ++){
      mobileFitureSlider.children[n].style = "transform: scale(1) !important ; background-color: rgb(33, 150, 245) !important"
    }
    mobileFitureSlider.children[mGroupNumber-1].style = "transform: scale(1.2) !important ; background-color:  #4caf50 !important"
  }


}











// Advantage Slider
const advantageSlider = document.getElementById('advantage-tab').getElementsByTagName('ul')[0]
const mobileAdvantageSlider = document.getElementById('advantage-tab').getElementsByTagName('ul')[1]
const paginations = document.getElementById('paginations') ;
const advantage = document.querySelectorAll('.advantage')

advantageSlider.addEventListener('click' , advantageShow) 

function advantageShow(e) {
  for(let i = 0 ; i < advantageSlider.children.length ; i ++ ) {
    advantageSlider.children[i].style = " font-weight : normal ; opacity :0.7"
  }
  e.target.style = "font-weight : bold ; opacity : 1 "
  let num = Number(e.target.id.slice(-1))
  for(let j = 0 ; j < paginations.children.length ; j ++) {
    paginations.children[j].classList = "" ; 
    paginations.children[num-1].classList = "focused-pagination"  
  }
  for(let k = 0 ; k < advantage.length ; k ++) {
    advantage[k].classList = "";
    advantage[num-1].classList = "focused-advantage"
  }
}

mobileAdvantageSlider.addEventListener('click' , mobileAdvantageShow) 

function mobileAdvantageShow(e) {
  for(let i = 0 ; i < mobileAdvantageSlider.children.length ; i ++ ) {
    mobileAdvantageSlider.children[i].style = " font-weight : normal ; opacity :0.7"
  }
  e.target.style = "font-weight : bold ; opacity : 1 "
  let num = Number(e.target.id.slice(-1))
  for(let j = 0 ; j < paginations.children.length ; j ++) {
    paginations.children[j].classList = "" ; 
    paginations.children[num-1].classList = "focused-pagination"  
  }
  for(let k = 0 ; k < advantage.length ; k ++) {
    advantage[k].classList = "";
    advantage[num-1].classList = "focused-advantage"
  }
}

// Drop menu

const dropMenu = document.getElementById('drop-menu')
const navLinks = document.getElementById('links-list')

if (window.innerWidth <770) {
  navLinks.style = " transform : scale(0)"
}

dropMenu.addEventListener('click' , openDropMenu )

function openDropMenu () {
    if (navLinks.style.transform == "scale(0)"){
      dropMenu.style = "transform : rotate(270deg)"
      navLinks.style = " transform : scale(1)"
    }
    else if (navLinks.style.transform == "scale(1)") {
      dropMenu.style = "transform : rotate(0deg)"
      navLinks.style = " transform : scale(0)"
    }
}

// Data validation

const validationBtn = document.getElementById('validation')
const phone = document.getElementById('phone')

validationBtn.addEventListener('click' , dataValidation)
phone.addEventListener('click' , closeMessage)

function closeMessage() {
  document.getElementById('validation-message').style = "opacity : 0"
}

function dataValidation(){
  
  if (phone.value.length != 11 || phone.value.indexOf(0) != 0) {
    document.getElementById('validation-message').innerHTML = ` <h5 style= "background:red">خطا!</h5>
    <p>شماره موبایل را اشتباه وارد کردید</p>`
  }else {
    document.getElementById('validation-message').innerHTML = ` <h5 style = "background : green ">ثبت</h5>
    <p>شماره ی شما ثبت شد</p>`
  }
  document.getElementById('validation-message').style = "opacity : 0.9"
}
