const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");


function addTask(){

    // if input box is empty then show the alert "You must write something"
    if(inputBox.value === ''){
        alert("You must write something");
    }
    else{

        // if the input box is having something then create an element
        let li = document.createElement("li");
        // place the content inside the li
        li.innerHTML = inputBox.value;
        // put this inside the list container
        listContainer.appendChild(li);  
        let span  = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span); 
    }

    // clear the inputBox
        inputBox.value = "";
        saveData();
     
}

listContainer.addEventListener("click", function(e){
    if(e.target.tagName === "LI")
    {
      e.target.classList.toggle("checked");
      saveData();
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
}, false)

function saveData(){
    localStorage.setItem("data", listContainer.innerHTML);
}

function showTask()
{
    listContainer.innerHTML = localStorage.getItem("data");
}

showTask();
