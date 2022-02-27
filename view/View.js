class TaskListView {
    constructor() {
        this.root = document.querySelector("#root")
        this.taskInput = this.root.querySelector("#title")
        this.dateInput = this.root.querySelector("#date")
        this.addButton = this.root.querySelector(".addTask")

        this.taskList = document.createElement("div")
        this.taskList.className = "task-list"

        this.root.append(this.taskList)
    }

    bindAddTask(handler) {
        this.addButton.addEventListener("click", event => {
            event.preventDefault()
            if (this.taskInput.value || this.dateInput.value) {
                handler(this.taskInput.value, this.dateInput.value)
            }
        })
    }

    bindChangeTask(handler) {
        this.taskList.addEventListener("click", e => {
            e.preventDefault()
            if (e.target.className === 'changeTask') {
                handler(this.taskInput.value, this.dateInput.value, e.target.parentElement.id)
            }
        })
    }                             
                                       
    bindRemTask(handler) {
        this.taskList.addEventListener("click", e => {
            e.preventDefault()
            if (e.target.className === "remTask") {
                handler(e.target.parentElement.id)
            }
        })
    }

    display(tasks) {
        while (this.taskList.children.length) {
            this.taskList.firstChild.remove()
        }

        tasks.forEach(t => {
            const task = document.createElement("div")
            task.className = "task"
            task.id = t.id
            task.innerHTML = `
                <h1>${t.title}</h1>
                <p>${t.date}</p>
                <button class="changeTask">change</button>
                <button class="remTask">Remove</button>`

            this.taskList.append(task)
        })
    }
}