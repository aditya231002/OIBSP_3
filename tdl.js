let input = document.querySelector('.entry');
let addbtn = document.querySelector('.addinto');
let tasks = document.querySelector('.tasks');
 
input.addEventListener('keyup',()=>{
    if(input.ariaValueMax.trim()!=0){
        addbtn.classList.add('active')
    }else{
        addbtn.classList.remove('active')
    }
})

addbtn.addEventListener('click',() => {
    if(input.value.trim() !=0){
        let newItem=document.createElement('div');
        newItem.classList.add('item');
        newItem.innerHTML=`
        <p>${input.value}</p>
        <div class="itembtn"> 
          <i class="fa-solid fa-pen-to-square"></i> </i><i class="fa-solid fa-trash"></i>
        </div>
        `
        tasks.appendChild(newItem);
        input.value='';
    } else {
        alert('PLEASE ENTER A TASK')
    }
})

tasks.addEventListener('click', (e) =>{
    if(e.target.classList.contains('fa-trash')){
       e.target.parentElement.parentElement.remove();
    }
})

tasks.addEventListener('click', (e) =>{
    if(e.target.classList.contains('fa-pen-to-square')){
       e.target.parentElement.parentElement.classList.toggle('completed');
    }
})