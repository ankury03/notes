const notes = document.querySelector(".notes");
const button = document.querySelector(".btn");
let notesBox = document.querySelectorAll(".input-box");

function showNotes(){
    notes.innerHTML = localStorage.getItem("notesBox");
}
   
showNotes();

function Storage(){
    localStorage.setItem("notesBox" , notes.innerHTML);
}


button.addEventListener("click" , () => {
    let inputbox = document.createElement("p");
    let img = document.createElement("img");
    inputbox.className = "input-box";
    inputbox.setAttribute("contenteditable" , "true");
    img.src = "images/delete.png";
    notes.appendChild(inputbox).appendChild(img);
})

notes.addEventListener("click" , function(e){
    if(e.target.tagName === "IMG"){
        e.target.parentElement.remove();
        Storage();
    }
    else if(e.target.tagName === "P"){
        notesBox = document.querySelectorAll(".input-box");
            notesBox.forEach(el => {
                el.onkeyup = function(){
                    Storage();
                }
            });
    }
})


