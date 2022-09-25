import './style.css';
import deleteImage from '../src/imgs/delete.png'
import { task } from './tasks';

//Selectors
let createFolderBtn = document.querySelector('.createbtn')
let folderName = document.getElementById('Foldername')
let mainFolderDiv = document.querySelector('.folders')
let deleteBtnImg = document.querySelector('.delete-img')
let tasksSection = document.querySelector('.to-dos')
let mainTasksDiv = document.querySelector('.tasks')



let folderArray = []

 if (localStorage.getItem('folders')){
     folderArray = JSON.parse(localStorage.getItem('folders'))
 }

getFoldersFromLocalStrorage()






//EventListerners
createFolderBtn.onclick = function() {
    if (folderName.value !== ''){
        addFoldersToArray(folderName.value)
        folderName.value = ''
        mainTasksDiv.innerHTML = ''

    }else{
        alert('Enter a name for your folder')
    }
    
} 

// createFolderBtn.addEventListener('click', () => {
//     addFoldersToArray(folderName.value)
//     appendNewFolder()
// })

console.log(folderArray)

mainFolderDiv.addEventListener('mouseover', () => {
    toggleFolders()
    addFoldersToLocalStorageFrom(folderArray)
})
mainFolderDiv.addEventListener('click', function (e) {
    if (e.target.classList.contains('delete-img')){
        deleteFolderWith(e.target.parentElement.textContent)
        appendNewFolderFrom(folderArray)
    }
})

window.onload = function(){
    setInterval(task(), 1000);
 };


 //Functions
 function addFoldersToArray(folderName){
    const folder = {
        folderName: folderName,
    }
    folderArray.push(folder)
    appendNewFolderFrom(folderArray)
    //Add folders to local storage
    addFoldersToLocalStorageFrom(folderArray);
}


function appendNewFolderFrom(folderArray){
        mainFolderDiv.innerHTML = ''
        folderArray.forEach((folder) => {
            //let folder = createFolder(folderName.value)
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
        });
          
}

function deleteFolderWith(folderName){
    folderArray = folderArray.filter((folder) => folder.folderName != folderName)
    addFoldersToLocalStorageFrom(folderArray)
}



function toggleFolders(){
    let folders = mainFolderDiv.children;
    for (let i = 0; i<folders.length; i++){
        let folder = folders[i];
        folder.onclick = () => {
           removeFolderSelectedClass()
           folder.classList.add("folder-selected")
        }    
    }
    addFoldersToLocalStorageFrom(folderArray)
}

function removeFolderSelectedClass(){
    const divs = Array.from(document.getElementsByClassName('folder-selected'))
    divs.forEach(div => {
    div.classList.remove('folder-selected')
    div.classList.add('folder')
}) 
}

// function createFolder(folderName){
//     return {
//         folderName: folderName,
//         getFolderName() {
//             return folderName;
//         }
//     }
// }

function addFoldersToLocalStorageFrom(folderArray) {
    window.localStorage.setItem('folders', JSON.stringify(folderArray))
}

function getFoldersFromLocalStrorage(){
    let data = window.localStorage.getItem('folders')
    if (data) {
        let folders = JSON.parse(data);
        appendNewFolderFrom(folderArray)
    }
}



























