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
    //take the inputs and add them to objects variable
    //deal with submit button
    //deal with cancel button
    //add list text to page
    //addbutton to add todos
    //add a function to take todo input add to array that...
    //prints out new todos to the list
    dialogBtn.addEventListener("click", (e) => {
        let diaBox = document.querySelector(".diaBox");
        console.log(diaBox)
        diaBox.showModal()
        console.log(e.target)
        console.log(e)
        
        
    })

}

initProject()

//***User Interface***
//create project button
//View all projects somewhere
//View all todos in each project (probably just the title and duedate… perhaps changing color for different priorities).
//Expand a single todo to see/edit its details.
//Delete a todo button
//add a todo button
