import deleteImage from '../src/imgs/delete.png'
import editImage from '../src/imgs/edit.png'

export function task(){
    //Selection
    let addBtn = document.querySelector('.todobtn')
    let taskName = document.querySelector('#task')
    let taskDate = document.querySelector('#duedate')
    let urgency = document.querySelector('#urgency')
    let mainTasksDiv = document.querySelector('.tasks')
    let main = document.getElementById('main')


    //eventListeners
    addBtn.addEventListener('click', () => {
        appendTask()
    })
    //delete Button eventlistener
    mainTasksDiv.addEventListener('click', function (e) {
        if (e.target.classList.contains('task-delete-img')){
            e.target.parentElement.parentElement.remove()
        }
    })
    //edit Button eventlistener
    mainTasksDiv.addEventListener('click', function (e) {
        if (e.target.classList.contains('edit-img')){
            main.classList.add('blur')
        }
    })


    mainTasksDiv.addEventListener('mouseover', () => {toggleTasks()})
    


    //Functions
    function appendTask() {
        //Input Validation
        if (taskName.value === '' || taskDate.value === ''){
            alert("Please enter the missing fields")
            return
        }
        //creating task
        else{
            let task = createTask(taskName.value, taskDate.value, urgency.value)
            //console.log(urgency.value)
            let newTaskDiv = document.createElement('div')
            removeTaskSelectedClass()
            newTaskDiv.classList.add("task-selected")
            mainTasksDiv.append(newTaskDiv);
            //Adding P-tag with the name of the task
            let taskNamePTag = document.createElement('p')
            taskNamePTag.innerHTML = task.taskName
            taskNamePTag.classList.add('task-name')
            newTaskDiv.appendChild(taskNamePTag)
            //Adding the details div
            let detailsDiv = document.createElement('div')
            detailsDiv.classList.add('task-details')
            newTaskDiv.append(detailsDiv)
            //Adding date 
            let dueDatePTag = document.createElement('p')
            dueDatePTag.innerHTML = taskDate.value
            dueDatePTag.classList.add('task-date')
            detailsDiv.append(dueDatePTag)
            //Adding Urgency
            let taskUrgency = document.createElement('p')
            taskUrgency.innerHTML = task.urgency
            detailsDiv.append(taskUrgency)
            taskUrgency.classList.add('task-urgency')
            //Adding the delete image
            let deleteBtnImg = document.createElement('img')
            deleteBtnImg.src = deleteImage
            deleteBtnImg.classList.add('task-delete-img')
            detailsDiv.append(deleteBtnImg)
            //Adding Edit button
            let editBtnImg = document.createElement('img')
            editBtnImg.src = editImage
            editBtnImg.classList.add('task-delete-img')
            detailsDiv.append(editBtnImg)
        }
    }

    function createTask(taskName, dueDate, urgency){
        return {
            taskName: taskName,
            dueDate: dueDate,
            urgency: urgency,

            getTaskName() {
                return taskName
            },

            getDueDate(){
                return dueDate
            },

            getUrgency(){
                return urgency
            }
        }
    }

    function removeTaskSelectedClass(){
        const divs = Array.from(document.getElementsByClassName('task-selected'))
        divs.forEach(div => {
        div.classList.remove('task-selected')
        div.classList.add('task')
    }) 
    }

    function toggleTasks(){
        let tasks = mainTasksDiv.children;
        for (let i = 0; i<tasks.length; i++){
            let task = tasks[i];
            console.log(task)
            task.onclick = () => {
               removeTaskSelectedClass()
               task.classList.add("task-selected")
            }    
        } 
    }

    function blurActive(){
        let blur = document.querySelector('.blur')
        blur.classList.toggle('active')
    }

   








}