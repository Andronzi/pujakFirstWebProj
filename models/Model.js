class TaskList {
    constructor(baseTaskArray = [], idGetter = Date.now) {
        this.tasks = baseTaskArray
        this.getNewId = idGetter
    }

    addTask(_title, _date) {
        this.tasks.push({title: _title, date: _date, id: this.getNewId()})
    }

    //array = [{id: random, title: "", date: dateObj}]

    changeTask(_title, _date, _id) {
        let index = this.tasks.findIndex(task => task.id == _id)
        this.tasks[index].title = _title;
        this.tasks[index].date = date;
    }

    removeById(_id) {
        this.tasks.remove(this.tasks.find(task => task.id === _id))
    }
}