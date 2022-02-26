class TaskListController {
    constructor(view, taskList) {
        this.view = view
        this.taskList = taskList

        this.view.bindAddTask(this.handleAddTask)
        this.view.bindChangeTask(this.handleChangeTask)
    }

    handleAddTask = (title, date) => {
        this.taskList.addTask(title, date)
        this.onTaskListChanged()
    }

    handleChangeTask = (title, date, id) => {
        this.taskList.changeTask(title, date, id)
        this.onTaskListChanged()
    }

    onTaskListChanged() {
        this.view.display(this.taskList.tasks)
    }
}