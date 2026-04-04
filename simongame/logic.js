
let h2 = document.querySelector('h2') ;

let gameSeq =[] ; 
let userSeq =[] ; 
let started =false ; 
let level = 0 ; 
let btns = ['red' ,'green' ,'orange' ,'yellow']

// ensure is start only once 
document.addEventListener('keypress' ,()=>{
    if(started==false){
        console.log('Game is started') ; 
        started=true;
        levelup() ;
    };
});


function btnFlash(btn){
  btn.classList.add("Flash") ;
  setTimeout(() => {
    btn.classList.remove("Flash");
  }, 100);
};

function userFlash(btn){
    btn.classList.add("userflash") ; // enter the userflash enter here why 
    setTimeout(() => {
      btn.classList.remove("userflash");
    }, 1000);
  };


// code for the level up when game is already started 
function levelup(){
  userSeq =[] ; // there is little bit confude right 
    level++ ;
    h2.innerText = `level ${level}` ; 
    let randIdx = Math.floor(Math.random()*3);
    let  randcolor = btns[randIdx] ;
    let classbtn = document.querySelector(`.${randcolor}`) ; 
    console.log("game = ", randcolor);
    gameSeq.push(randcolor) ; 
    console.log(randcolor) ; 

    btnFlash(classbtn);  // this is comming with the yellow 

};

function ckeck(idx){
    if(userSeq[idx] == gameSeq[idx]){
      if(userSeq.length ==gameSeq.length){
        levelup() ; 
      }
    }else{
        h2.innerText = 'Game is over restart';
       h2.style.backgroundColor='red' ;
    }
    //console.log('this is current stages' , level);
}

function response(){
    let btn = this ; 
    btnFlash(btn) ;
    usercolor = btn.getAttribute('id');
    userSeq.push(usercolor);
    console.log("user =" ,usercolor) ;
     ckeck(userSeq.length-1) ; 
}

function response2(){
    let btn = this ; 
    userFlash(btn) ; 
    console.log('urser plash is clicked ')
}

let btna = document.querySelectorAll('.btn'); 
for(b of btna){
    b.addEventListener('click' ,response2) ;
}
for(abc of btna){
    abc.addEventListener('click' ,response);
} 

// mahaking the flasback 

// function flask(btn){
//   btn.classList.add('hanuman') ; 
//   setTimeout(() => {
//     btn.classList.remove('hanuman')
//   }, 2000);

// }