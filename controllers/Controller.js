class TaskListController {
    constructor(view, taskList) {
        this.view = view
        this.taskList = taskList

        this.view.bindAddTask(this.handleAddTask)
    }

    handleAddTask = (title, date) => {
        this.taskList.addTask(title, date)
        this.onTaskListChanged()
    }

    onTaskListChanged() {
        this.view.display(this.taskList.tasks)
    }
}