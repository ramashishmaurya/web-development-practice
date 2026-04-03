let btn = document.querySelector('button') ; 
let input = document.querySelector('input') ; 
let ul = document.querySelector('ul') ; 

// btn.addEventListener('click' ,()=>{
//   let items = document.createElement('li') ; 
//   items.innerText = input.value ; 
//   let btns = document.createElement('button') ;
//   btns.innerText = "Delete" ;

//   ul.appendChild(items);  
//   items.appendChild(btns) ; 
//   items.value ="" ;
// });

btn.addEventListener('click', () => {
  let text = input.value.trim(); 
  if (text !== "") {              
    let items = document.createElement('li');
    items.classList.add("list-item");
    items.innerText = text;

    let btns = document.createElement('button');
    btns.innerText = "Delete"; 
    
    btns.addEventListener('click', () => {
      items.remove();
    });

    btns.classList.add('point') ;
    items.appendChild(btns);
    ul.appendChild(items);

    input.value = "";             
  }
});


// ul trigger on the button get parents their 
// parents is <li> corrcet</li>

ul.addEventListener('click' ,(event)=>{
    if(event.target.nodeName =="BUTTON"){
        let par = event.target.parentElement ;
        par.remove();
    }
}); 

