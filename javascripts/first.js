let p = document.querySelector('p') ; 
let h1 = document.querySelector('h1') ; 

function changecolor(){
    console.dir(this.innerHTML) ;
    this.style.backgroundColor="red" ;
    this.style.color = 'yellow' ;
};  
p.addEventListener('click',changecolor);

h1.addEventListener('click',changecolor);
// this is always takes the corrent file excuting as well 