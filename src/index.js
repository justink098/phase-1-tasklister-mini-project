document.addEventListener("DOMContentLoaded", () => {
 const element = document.querySelector('#create-task-form').addEventListener("submit",(e)=>{
    e.preventDefault()
    console.log(e.target.lastElementChild.previousElementSibling.value) 
    
  })
   element.target.parentNode.remove// your code here
});

