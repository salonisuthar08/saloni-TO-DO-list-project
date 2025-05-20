

function addTask() {
    const taskInput = document.getElementById('inputTask');
    const taskText = taskInput.value.trim(); 

    // Check if the input is empty
    if (taskText === "") {
        alert("Please enter a task before adding.");
        return;
    }
    const newTask = document.createElement('li');

    const Tasklist = document.getElementById('Tasklist');
     
    newTask.textContent = document.getElementById('inputTask').value;

    
    const taskSpan = document.createElement('span');
  
    const doneBtn = document.createElement('button');
      doneBtn.textContent = "Done";
      doneBtn.onclick = function() {
        newTask.classList.toggle("done");     

};

const deleteBtn = document.createElement('button');
      deleteBtn.textContent = "Delete";
      deleteBtn.onclick = function() {
        Tasklist.removeChild(newTask);
      };
    
      newTask.appendChild(doneBtn);
      newTask.appendChild(deleteBtn);
      
     Tasklist.appendChild(newTask);
      

      document.getElementById('inputTask').value = "";
      
    }
  
  
            
        

       
    