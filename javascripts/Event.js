// let div = document.querySelector('div') ; 
// let ul = document.querySelector('ul');
// let li = document.querySelectorAll('li'); 

// function eventlistener(){
//     console.log('') ; 
// }
// div.addEventListener('click' ,(event)=>{
//     event.stopPropagation() ;
//     console.log('div was clicked')
// });

// ul.addEventListener('click' ,(event)=>{
//     event.stopPropagation() ;
//     console.log('ul was clicked')
// });

// // here use of the for because there are the multile values right here 
// for(lis of li){
//     lis.addEventListener('click' ,(a)=>{
//         a.stopPropagation();
//     console.log('li was clicked ') ; 
//     });
// };

let btn = document.querySelector('button'); 

let ul = document.querySelector('ul');
let input = document.querySelector('input') ; 

btn.addEventListener('click' , ()=>{
    let item = document.createElement('li') ;
    item.innerText = input.value ; 
    let detbtn = document.createElement('button') ;
    detbtn.innerText = "delete" ; 
    detbtn.classList.add("delete") ;
    item.appendChild(detbtn) ;

    ul.appendChild(item);
   input.value= ""; 
});

ul.addEventListener('click',(event)=>{
   if(event.target.nodeName =="BUTTON"){
    let pars = event.target.parentElement;
    pars.remove(); 
    console.log('deleted successfully') ; 
   } ;
});

// let del = document.querySelectorAll('.delete');

// for(let dels of del){
//     dels.addEventListener('click' , ()=>{
//         let par = dels.parentElement ;
//         console.log(par) ;
//         par.remove();

//     })
// }

let para = document.querySelector('p') ; 
// para.addEventListener('click' ,()=>{
//     console.dir(para.innerText);
// });
console.log(para.innerText) ; 