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
    h3.style.color = randomcolors;
    let div = document.querySelector(".abc");
    div.style.backgroundColor = randomcolors; // use the correct variable name
    console.log('Color is updated');
});






function randomcolor(){
    let red = Math.floor(Math.random()*255) ;
    let green= Math.floor(Math.random()*255) ;
    let blue = Math.floor(Math.random()*255) ;
    let color = `rgb(${red}, ${green}, ${blue})`;

    return color ; 
}

