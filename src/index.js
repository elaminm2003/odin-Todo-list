import './style.css';
import deleteImage from '../src/imgs/delete.png'

//DOM
let createFolderBtn = document.querySelector('.createbtn')
let folderName = document.getElementById('Foldername')

//Adding a new folder to folders div

createFolderBtn.onclick = function(){
    if (folderName.value === '') {
        alert('The folder must have a name')
        return
    } else {
    let folder = createFolder(folderName.value)
    let mainFolderDiv = document.querySelector('.folders')

    //remove folder-selected class from all other divs
    removeFolderSelectedClass()


    //Creating a new folder and appending to the folder divs
    let newFolderDiv = document.createElement('div')
    newFolderDiv.classList.add("folder-selected")
    mainFolderDiv.append(newFolderDiv);
    
    //Toggle between folders
    let folders = mainFolderDiv.children;
    for (let i = 0; i<folders.length; i++){
        let folder = folders[i];
        folder.onclick = () => {
           removeFolderSelectedClass()
           folder.classList.add("folder-selected")
        }    
    }
    
    
    //Adding P-tag with the name of the folder
    let folderNamePTag = document.createElement('p')
    folderNamePTag.innerHTML = folder.folderName
    newFolderDiv.appendChild(folderNamePTag)
    
    //Adding the delete image
    let deleteBtnImg = document.createElement('img')
    deleteBtnImg.src = deleteImage
    deleteBtnImg.classList.add('delete-img')
    newFolderDiv.append(deleteBtnImg)

    
    
    return false;
    }
    
    
}

function removeFolderSelectedClass(){
    const divs = Array.from(document.getElementsByClassName('folder-selected'))
    divs.forEach(div => {
    div.classList.remove('folder-selected')
    div.classList.add('folder')
})
}

// function selectFolder(){
//     let folders = mainFolderDiv.children;
//     for (let i = 0; i<folders.length; i++){
//         let folder = folders[i];
//         folder.onclick = () => {
//            removeFolderSelectedClass()
//            folder.classList.add("folder-selected")
//         }    
//     }
// }



function createFolder(folderName){
    return {
        folderName: folderName,
        getFolderName() {
            return folderName;
        }
    }
}




















