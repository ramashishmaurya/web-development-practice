// let btn = document.querySelectorAll('button') ;// gives all the buttons 
// function sayhello(){
//     console.log('Hey , How are you ')
// } ;  

// Eventlisterns that is important one 
// for(abc of btn){
//     abc.addEventListener('click',()=>{
//         console.log('bhai this one is for the 1 ')
//     }) ; 
//     abc.addEventListener('click' ,()=>{
//         console.log('this is for the 2 values right ')
//     });
// };
// here is the div available correct inside the class generate okay  
const button = document.querySelector(".generate button"); 


button.addEventListener("click", function () {
    let h3 = document.querySelector('h3') ; 
    let randomcolors = randomcolor() ; 
    h3.style.color.backgroundColor = randomcolors;
    let div = document.querySelector(".abc");
    div.style.backgroundColor = 'rgb(53 , 238 ,3)'; // use the correct variable name
    let body = document.querySelector('body') ;     body.style.backgroundColor = randomcolors; 
    console.log('Color is updated');
});

function randomcolor(){
    let red = Math.floor(Math.random()*255) ;
    let green= Math.floor(Math.random()*255) ;
    let blue = Math.floor(Math.random()*255) ;
    let color = `rgb(${red}, ${green}, ${blue})`;

    return color ; 
}
let para = document.querySelector('p') ; 
para.addEventListener('click' ,()=>{
    console.log('para is clicked ') ;
}); 
// this is not only for the paragraphs right this is for the both correct yes 

let box = document.querySelector('.box'); 
box.addEventListener('mouseenter',()=>{
    console.log('finally we enter on the mouse ')

}) ; 
// these is the event listener only the querySelector only select one but here getdocumentbyid and and class select the multiple right we need to select using the array correct 


