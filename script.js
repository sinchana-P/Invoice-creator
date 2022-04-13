const washBtn = document.getElementById("washBtn");
const lawnBtn = document.getElementById("lawnBtn");
const weedsBtn = document.getElementById("weedsBtn");
let tasks = document.getElementById("task-list-container");
const totalAmount = document.getElementById("total-amt");
let note = document.getElementById("note");
let sendBtn = document.getElementById("send-btn");
let removeBtn = document.getElementById("remove-btn");
let taskList = document.getElementById("taskList");


//console.log(taskList);
//console.log(tasks);
let hasWash = 0;  
let hasLawn = 0;
let hasWeed = 0;

let taskArray = [];
let costArray = [];
//console.log(taskArray);
let element;

washBtn.addEventListener("click",function(){
    if(!hasWash){
        taskArray.push("Wash Car");
        costArray.push(10);
        //console.log(taskArray);
        addService(taskArray,costArray);
        hasWash = 1;
        
        }
    });    

lawnBtn.addEventListener("click",function(){
    if(!hasLawn){
        taskArray.push("Mow Lawn");
        costArray.push(20); 
        //console.log(taskArray);
        addService(taskArray,costArray);
        hasLawn = 1;
    }
    
} );  

weedsBtn.addEventListener("click",function(){
    if(!hasWeed){
        taskArray.push("Pull Weeds");
        costArray.push(30); 
        //console.log(taskArray); 
        addService(taskArray,costArray);
        hasWeed = 1;
    }
    
} );  

function addService(service,serviceCost){
       //console.log(service[0]);
       //console.log(hasWash);
       //console.log(hasLawn);
       //console.log(hasWeed);
        let task = " ";
        let amt = 0;
        //if(!hasLawn || !hasWash || !hasWeed ){
         for(let i = 0; i < service.length; i++){
            task += `<div class="task-list">
                       <span>
                           ${service[i]} 
                           <button id="remove-btn" value="${i}" onclick="removeItem(this.value)"> Remove </button>
                        </span>
                       
                       <span>$ ${serviceCost[i]}</span>
                    </div>`
              
              //console.log(task); 
              amt += serviceCost[i];
              //console.log(amt);
         }
         tasks.innerHTML = task;   
         //console.log(tasks);       
         note.textContent = `We accept cash, credit card, or PayPal`;
         totalAmount.textContent = `$${amt}`;     
}


sendBtn.addEventListener("click",function(){
    tasks.innerHTML = " ";
    totalAmount.textContent = `$0`;
    hasLawn = hasWash = hasWeed = 0;
    taskArray = [];
    costArray = [];

    note.textContent = ` `;
})

function removeItem(item){
    //console.log(item);
    taskArray.splice(item,1);
    costArray.splice(item,1);
    //console.log(taskArray);
    addService(taskArray,costArray);
    
    hasWash = taskArray.includes("Wash Car");
    //console.log(hasWash);
    hasLawn = taskArray.includes("Mow Lawn");
    hasWeed = taskArray.includes("Pull Weeds");
}
