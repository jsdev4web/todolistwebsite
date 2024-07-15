class logMessages {
    constructor(name) {
        this.name = name
    }
    welcome(){
        console.log(`Welcome to the todo list ${this.name}`)
    }
}

class todolist extends logMessages{
    //class body

    constructor(name, title, todolist, dueDate, priority){
        super(name)
        this.title = title
        this.todolist = []
        this.dueDate = new Date()
        this.priority = priority
    }

    displayProject(){
        console.log(`
        name: ${this.name}
        title: ${this.title}
        todolist: ${this.todolist}
        dueDate: ${this.dueDate}
        priority: ${this.priority}`
    )}

    addToList(){
        let todo = prompt("What do you want to do?")
        this.todolist.push(todo)
        console.log(this.todolist)
        }

    removeLasttodo(){
        this.todolist.pop()
    }
    }

const list1 = new todolist("joe", "Odin", "study javascript", 1/1/2024, "high");
list1.displayProject()
const list2 = new todolist("Jill", "Workout", "run alot", 1/5/2024, "low")
list2.displayProject()
list1.welcome()

//list1.addToList()

//*******DOMs Section************************************* */

let main = document.createElement("div")
main.setAttribute("class", "main")
document.body.appendChild(main)

let myH1 = document.createElement("h1")
myH1.setAttribute("id", "myH1");
myH1.innerText = "My TodoList"
main.appendChild(myH1)

let projectDiv = document.createElement("div")
projectDiv.setAttribute("class", "projectDiv")
main.appendChild(projectDiv)


const dialogBtn = document.createElement("button")
dialogBtn.setAttribute("class", "dialogBtn")
dialogBtn.innerText = "Create list"

projectDiv.appendChild(dialogBtn).before(myH1)



function initProject(){
    
    dialogBtn.addEventListener("click", (e) => {
        let diaBox = document.querySelector(".diaBox");
        console.log(diaBox)
        diaBox.showModal()
        console.log(e.target)
        console.log(e)
        
        
    })
}

initProject()

let submitBtn = document.querySelector(".submitbtn")
console.log(submitBtn)
submitBtn.addEventListener("click", function(event){
    event.preventDefault()

    let name = document.getElementById("name").value
    console.log(name)

    let title = document.getElementById("title").value
    console.log(title)

    let todoadd = document.getElementById("todoadd").value
    console.log(todoadd)

    let duedate = document.getElementById("duedate").value
    console.log(duedate)

    let priority = document.getElementById("priority").value
    console.log(priority)

    const list3 = new todolist(name, title, todoadd, duedate, priority)
    list3.displayProject()

    let listCurrent = document.createElement("div")
    listCurrent.setAttribute("class", "listCurrent")

    main.appendChild(listCurrent).before(projectDiv)
    
    let addTodoBtn = document.createElement("button")
    addTodoBtn.setAttribute("class", "todoadd")
    addTodoBtn.innerText = "Add To List"

    //main.appendChild(addTodoBtn).before(listCurrent)
    listCurrent.appendChild(addTodoBtn)


    let html = "";

    html += `
    name: ${name}
    title: ${title}
    todos: ${todoadd}
    duedate: ${duedate}
    priority: ${priority}
    `
    listCurrent.innerText = html
    
    let diaBox = document.querySelector(".diaBox");
    diaBox.remove(diaBox);

    let btnAddToDo = document.createElement("button")
    btnAddToDo.setAttribute("class", "btnAddToDo")

    listCurrent.appendChild(btnAddToDo).innerText = "Add"

    let btnRemove = document.createElement("button")
    btnRemove.setAttribute("class", "btnRemove")
    
    listCurrent.appendChild(btnRemove).innerText = "Remove"

})

    

//***User Interface***

//when the submit button is hit i need to be making 
// A instance of the object
//CREATE A NEW OBJECT EACH SUBMIT


//add todos to the list
//remove from the list

//create another project new div 
// make sure btns usable add remove varialbes

//add some sort of storage
//find the object for each instance of the object