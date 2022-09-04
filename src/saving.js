tasks.js 


////
////
///


export function task(){
    //Selection
    let addBtn = document.querySelector('.todobtn')
    let taskName = document.querySelector('#task')
    let taskDate = document.querySelector('#duedate')
    let urgency = document.querySelector('#urgency')


    //eventListeners
    addBtn.addEventListener('click', appendTask())


    //Functions
    function appendTask() {
        //Input Validation
        if (taskName === ''){
            alert("The task must have a name")
            return
        }else if (taskDate === ''){
            alert("The task must have a due date")
            return
        }//creating task
        else{
            let task = createTask(taskName.value, taskDate.value, urgency.value)
            let newTaskDiv = document.createElement('div')
            removeTaskSelectedClass()
            newTaskDiv.classList.add("task-selected")
            //Adding P-tag with the name of the task
            let taskNamePTag = document.createElement('p')
            taskNamePTag.innerHTML = task.taskName
            newTaskDiv.appendChild(taskNamePTag)
            console.log
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

}



///////
///////
/////////
////////
////////
///////




index.js
////
////
///

import './style.css';
import deleteImage from '../src/imgs/delete.png'
import { task } from './tasks';

//Selectors
let createFolderBtn = document.querySelector('.createbtn')
let folderName = document.getElementById('Foldername')
let mainFolderDiv = document.querySelector('.folders')
let deleteBtnImg = document.querySelector('.delete-img')
let tasksSection = document.querySelector('.to-dos')



//EventListerners
createFolderBtn.addEventListener('click', () => {appendNewFolder()})
mainFolderDiv.addEventListener('mouseover', () => {toggleFolders()})

deleteBtnImg.addEventListener('click', () => {deleteFolder()})
tasksSection.addEventListener('mouseover', () => {
    task()
})





//Functions
function appendNewFolder(){
    if (folderName.value === '') {
        alert('The folder must have a name')
        return
    }else {
        let folder = createFolder(folderName.value)
        let newFolderDiv = document.createElement('div')
        removeFolderSelectedClass()
        newFolderDiv.classList.add("folder-selected")
        mainFolderDiv.append(newFolderDiv);
        //Adding P-tag with the name of the folder
        let folderNamePTag = document.createElement('p')
        folderNamePTag.innerHTML = folder.folderName
        newFolderDiv.appendChild(folderNamePTag)
        //Adding the delete image
        let deleteBtnImg = document.createElement('img')
        deleteBtnImg.src = deleteImage
        deleteBtnImg.classList.add('delete-img')
        newFolderDiv.append(deleteBtnImg) 
}
}

function deleteFolder(){
    let folders = mainFolderDiv.children;
    for (let i = 0; i<folders.length; i++){
        let folder = folders[i];
        let deleteImg = folder.lastChild
         deleteImg.onclick = () => {
             folder.remove()
         }
}}





function toggleFolders(){
    let folders = mainFolderDiv.children;
    for (let i = 0; i<folders.length; i++){
        let folder = folders[i];
        folder.onclick = () => {
           removeFolderSelectedClass()
           folder.classList.add("folder-selected")
        }    
    } 
}

function removeFolderSelectedClass(){
    const divs = Array.from(document.getElementsByClassName('folder-selected'))
    divs.forEach(div => {
    div.classList.remove('folder-selected')
    div.classList.add('folder')
}) 
}

function createFolder(folderName){
    return {
        folderName: folderName,
        getFolderName() {
            return folderName;
        }
    }
}
