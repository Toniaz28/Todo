user_input = document.querySelector("input");
var btn = document.querySelector("button");
var items = document.querySelector("main");
var thrash = document.querySelectorAll("delete");


// function for Add button
btn.addEventListener("click", function(){
   if(user_input.value == ''){
    alert("Enter a Task");
   }else{
    var div= document.createElement("div");
    div.innerHTML = `
        <div class="item">
        <p> ${user_input.value}</p>
        <i class="fa fa-trash" id="delete"></i>
    </div>
`
  
    items.appendChild(div)
   }
    saveData();

})

items.addEventListener("click", function(e){
    e.target.parentElement.remove()
    saveData();
})


// function to store task in local storage after refreshing browser.
function saveData(){
    localStorage.setItem("data", items.innerHTML);
}

function showTask(){
    items.innerHTML = localStorage.getItem("data");
}
showTask();

