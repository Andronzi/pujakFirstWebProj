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
        this.addButton.addEventListener("click", e => {
            e.preventDefault()
            handler(this.taskInput.value, this.dateInput.value)
        })
    }

    bindChangeTask(handler) {
        this.taskList.addEventListener("click", e => {
            e.preventDefault()

            if (e.target.className === "changeButton") {
                console.log("11")
                handler(this.taskInput.value, this.dateInput.value,
                    e.target.parentElement.id)
                console.log("22")
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
                <button class="changeButton">Change</button>`

            this.taskList.append(task)

            /*const changeButton = document.createElement("button")
            changeButton.parentElement.setAttributeNode()
            changeButton.textContent = "Change"

            this.taskList.append(changeButton)*/
        })
    }

}