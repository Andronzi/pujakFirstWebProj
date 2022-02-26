class TaskListView {
    constructor() {
        this.taskInput = document.querySelector("#title")
        this.dateInput = document.querySelector("#date");
        this.addButton = document.querySelector(".addTask");

        this.taskList = document.createElement("div")
        this.taskList.className = "task-list"
        document.body.append(this.taskList)
    }

    bindAddTask(handler) {
        this.addButton.addEventListener("click", event => {
            event.preventDefault()
            handler(this.taskInput.value, this.dateInput.value)
        })
    }

    bindRemTask(handler) {
        this.taskList.addEventListener("click", event => {
            event.preventDefault()
            handler(event.target.parentElement.id)
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
                <button class="remTask">Remove</button>`

            this.taskList.append(task)
        })
    }

}