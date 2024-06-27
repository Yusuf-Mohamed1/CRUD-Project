let tasks =[
]

function pars(){
  let retreive = JSON.parse(localStorage.getItem("tasks"))
  if(retreive==null){
    tasks=[]
  }
  else
  tasks=retreive
}

pars()

function addvalue(){
  document.getElementById("tasks").innerHTML=""
    let index=0
    for(i of tasks){
        let content= `
        <div class="div-4 ${i.isDone ? 'done' : ''} ">
        <div class="div-4-text">
          <h2 style="padding: 0; margin: 0">${i.title}</h2>
          <div style="display: flex; align-items: center; gap: 5px">
            <span class="material-symbols-outlined"> calendar_month </span>
            <span>${i.date} </span>
          </div>
        </div>
        <div class="div-4-content">
          <button onclick="btndelete(${index})" class="circle" style="background-color: rgb(144, 0, 0)">
            <span class="material-symbols-outlined"> delete </span>
          </button>

          ${i.isDone ? `
            <button onclick="complete(${index})" class="circle" style="background-color: rgb(255, 0, 0)">
            <span class="material-symbols-outlined"> cancel </span>
            </button>
        `:
        `
            <button onclick="complete(${index})" class="circle" style="background-color: rgb(0, 150, 30)">
            <span class="material-symbols-outlined"> check </span>
        </button> 
      `
    }
          
          <button onclick="btnedit(${index})"
            class="circle"
            style="background-color: rgba(0, 16, 197, 0.692)"
          >
            <span class="material-symbols-outlined"> edit </span>
          </button>
        </div>
      </div>
        `
        document.getElementById("tasks").innerHTML +=content
        index++
    }
}

addvalue()

document.getElementById("add-btn").addEventListener("click",function(){
    let now =new Date()
    let date=now.getDate()+"/"+(now.getMonth()+1)+"/"+now.getFullYear()
    let res = prompt("Please, Enter The Task : ")
    
    let resobj ={
        title:res,
        date:date,
        isDone:false,
    }
    tasks.push(resobj)
    storagefun()
    addvalue()
})


function btndelete(index){
    let isconfirm=confirm(`Are you sure you want to delete the : ${tasks[index].title}`)
    if(isconfirm){
        tasks.splice(index,1)
        storagefun()
        addvalue()
    }
}


function btnedit(index){
    let res = prompt("Please, Enter The Edit Task : ",tasks[index].title)
    tasks[index].title=res
    storagefun()
    addvalue()
}


function complete(index){
    tasks[index].isDone =!tasks[index].isDone
    storagefun()
    addvalue()
}


function storagefun(){
  let taskString = JSON.stringify(tasks)
  localStorage.setItem("tasks" , taskString)
}