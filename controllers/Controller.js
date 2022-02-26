class TaskListController {
    constructor(view, taskList) {
        this.view = view
        this.taskList = taskList

        this.view.bindAddTask(this.handleAddTask)
        this.view.bindRemTask(this.handleRemTask)
    }

    handleAddTask = (title, date) => {
        this.taskList.addTask(title, date)
        this.onTaskListChanged()
    }

    handleRemTask = (id) => {
        this.taskList.removeById(id)
        this.onTaskListChanged()
    }

    onTaskListChanged() {
        this.view.display(this.taskList.tasks)
    }
}