// Modle
const count={
    id:0,
};


// view
const userInput=document.getElementById('input-text');
const userButton=document.getElementById('Add-btm');
const userList=document.getElementById('todoList');

userButton.addEventListener('click', function(){
    const taskText=userInput.value.trim();
    if(taskText!==""){
        Addtask(taskText);
        userInput.value=' ';
    }
});



//controller
function Addtask(taskText){
    const listItem = document.createElement('li');
    listItem.textContent=taskText;

    listItem.id = `task-${count.id}`;
    count.id++; 
    
    const deleteBtm = document.createElement('button');
    deleteBtm.textContent='Delete'; 
    deleteBtm.addEventListener('click', function(){
            userList.removeChild(listItem);
        });

    userList.appendChild(listItem);
    listItem.appendChild(deleteBtm);
   
}
