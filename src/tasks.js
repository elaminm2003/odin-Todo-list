import deleteImage from '../src/imgs/delete.png'

export function task(){
    //Selection
    let addBtn = document.querySelector('.todobtn')
    let taskName = document.querySelector('#task')
    let taskDate = document.querySelector('#duedate')
    //console.log(taskName)
    let urgency = document.querySelector('#urgency')
    let mainTasksDiv = document.querySelector('.tasks')
    let main = document.getElementById('main')
    let body = document.getElementsByTagName('Body')[0]
    let nameOfTask = document.querySelector('.task-name')
    let folderSelected = document.querySelector('.folder-selected').textContent
    let mainFolderDiv = document.querySelector('.folders')
    console.log(folderSelected)

    let taskArray = []
    console.log(taskArray)

    if (localStorage.getItem('tasks')){
        taskArray = JSON.parse(localStorage.getItem('tasks'))
    }

    getTasksFromLocalStrorage()


    //eventListeners

    window.onload = function(){
        setInterval(console.log(folderSelected), 1000);
     };


    // addBtn.addEventListener('click', () => {
    //     appendTask()
    // })
    //delete Button eventlistener
    mainTasksDiv.addEventListener('click', function (e) {
        if (e.target.classList.contains('task-delete-img')){
            deleteTaskWith(e.target.parentElement.parentElement.children[0].innerHTML)
            appendNewTaskFrom(taskArray)
            
        }
    })
    //edit Button eventlistener
    // mainTasksDiv.addEventListener('click', function (e) {
    //     if (e.target.classList.contains('edit-img')){
    //         main.classList.add('blur')
    //         addPopUp()
            
    //     }
    // })

    addBtn.onclick = function() {
        if (taskName.value !== '' || taskDate.value !== ''){
            addTasksToArray(taskName.value, taskDate.value, urgency.value, folderSelected)
            taskName.value = ''
            taskDate.value = ''
        }else{
            alert('Enter the missing fields')
        }
        
    }
    
    mainFolderDiv.addEventListener('mouseover', () => {
        toggleFolders()
    })


    mainTasksDiv.addEventListener('mouseover', () => {toggleTasks()})
    


    //Functions
    function addTasksToArray(taskName, taskDate, taskUrgency, folderName){
        const task = {
            taskName: taskName,
            taskDate: taskDate,
            taskUrgency: taskUrgency,
            folderName: folderName
        }
        taskArray.push(task)
        appendNewTaskFrom(taskArray)
        //Add folders to local storage
        addTasksToLocalStorageFrom(taskArray);
    }





    function appendNewTaskFrom(taskArray) {
            //let task = createTask(taskName.value, taskDate.value, urgency.value)
            //console.log(urgency.value)
            mainTasksDiv.innerHTML = ''
            taskArray.forEach((task) => {
                if (task.folderName === folderSelected) {
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
                    dueDatePTag.innerHTML = task.taskDate
                    dueDatePTag.classList.add('task-date')
                    detailsDiv.append(dueDatePTag)
                    //Adding Urgency
                    let taskUrgency = document.createElement('p')
                    taskUrgency.innerHTML = task.taskUrgency
                    detailsDiv.append(taskUrgency)
                    taskUrgency.classList.add('task-urgency')
                    //Adding the delete image
                    let deleteBtnImg = document.createElement('img')
                    deleteBtnImg.src = deleteImage
                    deleteBtnImg.classList.add('task-delete-img')
                    detailsDiv.append(deleteBtnImg)
                }
                
            })
            
        }

        function deleteTaskWith(taskName){
            taskArray = taskArray.filter((task) => task.taskName != taskName)
            addTasksToLocalStorageFrom(taskArray)
        }

        function toggleFolders(){
            let folders = mainFolderDiv.children;
            for (let i = 0; i<folders.length; i++){
                let folder = folders[i];
                folder.onclick = () => {
                // window.location.reload();
                   removeFolderSelectedClass()
                   folder.classList.add("folder-selected")
                   updateFolderSelected()
                   console.log(folderSelected)
                   appendNewTaskFrom(taskArray)
                }    
            }
            //addFoldersToLocalStorageFrom(folderArray)
        }

        function removeFolderSelectedClass(){
            const divs = Array.from(document.getElementsByClassName('folder-selected'))
            divs.forEach(div => {
            div.classList.remove('folder-selected')
            div.classList.add('folder')
        }) 
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
            //console.log(task)
            task.onclick = () => {
               removeTaskSelectedClass()
               task.classList.add("task-selected")
               
            }    
        }
        
        addTasksToLocalStorageFrom(taskArray) 
    }

    function addTasksToLocalStorageFrom(taskArray) {
        window.localStorage.setItem('tasks', JSON.stringify(taskArray))
    }
    
    function getTasksFromLocalStrorage(){
        let data = window.localStorage.getItem('tasks')
        if (data) {
            let tasks = JSON.parse(data);
            appendNewTaskFrom(taskArray)
        }
    }

    function updateFolderSelected(){
        const divs = Array.from(document.getElementsByClassName('folder-selected'))
        divs.forEach(div => {
        if (div.classList.contains('folder-selected')) {
            folderSelected = div.textContent
        }
    })

}








//     function addPopUp(){
//             let editDiv = document.createElement('div')
//             body.append(editDiv)
//             editDiv.classList.add('to-dos')
//             editDiv.classList.add('hidden')
//             let form = document.createElement('form')
//             form.classList.add('add-todos')
//             let inputName = document.createElement('input')
//             inputName.type = 'text'
//             inputName.placeholder = 'Your Task'
//             inputName.name = 'task'
//             inputName.setAttribute('id', 'task')
//             form.append(inputName)

//             mainTasksDiv.addEventListener('click', function (e) {
//                 if (e.target.classList.contains('edit-img')){
//                     editDiv.classList.remove('hidden')
//                     editDiv.style.display = 'block'
//                 }
//     }) 
// }

console.log(taskArray)

}
