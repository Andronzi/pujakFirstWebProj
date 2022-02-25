class TaskList {
    constructor(baseTaskArray = [], idGetter = Date.now) {
        this.tasks = baseTaskArray;
        this.getNewId = idGetter
    }

    addTask(_title, _date) {
        this.tasks.push({title: _title, date: _date, id: this.getNewId()})
    }

    removeById(_id) {
        this.tasks.remove(this.tasks.find(task => task.id === _id))
    }
}