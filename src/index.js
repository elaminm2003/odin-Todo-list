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
mainFolderDiv.addEventListener('click', function (e) {
    if (e.target.classList.contains('delete-img')){
        e.target.parentElement.remove()
    }
})

window.onload = function(){
    setInterval(task(), 1000);
 };


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



























