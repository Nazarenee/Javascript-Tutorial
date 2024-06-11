/*
Easy way to accept user input = window prompt 

let username;
username = window.prompt("Lets ask whats ur username");
*/


// Professional way to accept user input 

document.getElementById("mySubmit").onclick = function(){
    username = document.getElementById("myText").value;
    document.getElementById("myH1").textContent = `Hello ${username}`;
}