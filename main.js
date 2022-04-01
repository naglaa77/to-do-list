/*
students tasks:
[1] use sweet alert if input is empty ====> done
[2] check if task is exist alert to say that
[3] create delete all tasks button
[4] creat finish all tasks
[5] add to tasks to local storage
*/


// [1]setting up variables****

let theInput = document.querySelector('.add-task input');
let theAddButton = document.querySelector('.add-task .plus');
let tasksContainer = document.querySelector('.tasks-content');
let noTasksMsg = document.querySelector('.no-tasks-message');
let tasksCount = document.querySelector('.tasks-count span');
let tasksCompleted = document.querySelector('.tasks-completed span');

// [2]focus on input field ****

window.onload = function(){
    theInput.focus();
}

//[3]adding the task ****

theAddButton.onclick = function(){
    //if input is empty
    if(theInput.value === ''){
        // add swit alert here
        swal("be attention!", "You for get write your task!","warning"); 

    }else{

        let noTasksMsg = document.querySelector('.no-tasks-message');
         
        //check ifspan with  no tasks message exist
        if(document.body.contains(document.querySelector('.no-tasks-message'))) {
            noTasksMsg.remove();
        }
    
    

        //creat span element
        let mainSpan = document.createElement("span");

        // create delete element
        let deleteElement = document.createElement('span');

        //cretae text to main span
        let text = document.createTextNode(theInput.value);

        //create text delete button
        let deleteText = document.createTextNode("Delete");

        //add text to span
        mainSpan.appendChild(text);

        //add class to span
        mainSpan.className = 'task-box';


        // add text to delete button
        deleteElement.appendChild(deleteText);
        //add class to dlete button
        deleteElement.className = 'delete';

        // add delete to main span
        mainSpan.appendChild(deleteElement);

        //add the task to the container
        tasksContainer.appendChild(mainSpan);

        // empty the input

        theInput.value = '';
        // focus on field
        theInput.focus();

        // calculate tasks
        calculateTasks();

    }
};
 document.addEventListener('click',function(e){
     //to arrive delete task 
     if(e.target.className == 'delete'){
         //console.log("this my element delet button");
         e.target.parentNode.remove();
         
         //check number of tasks inside container
         if(tasksContainer.childElementCount == 0){
             
            createNoTasks();
         }

     }
     //finish task
     if(e.target.classList.contains('task-box')){
        // toggle class 'finished'
        e.target.classList.toggle('finished');

    }
     // calculate tasks
     calculateTasks();
 });

 //[4] function to create no tasks message

 function createNoTasks () {
     // create message span element
     let msgSpan = document.createElement("span");
     
     //create the text message
     let msgText = document.createTextNode("No Tasks to Show");

     //add text to message span element
     msgSpan.appendChild( msgText);

     //add class to message span
     msgSpan.className = 'no-tasks-message';

     //append the message span element to the task container
     tasksContainer.appendChild(msgSpan);
 }

 //function to calculatio tasks
 function calculateTasks(){
     // calculate all tasks
     tasksCount.innerHTML = document.querySelectorAll('.tasks-content .task-box').length;
      
     // calculate completed tasks 
     tasksCompleted.innerHTML = document.querySelectorAll('.tasks-content .finished').length;

 }