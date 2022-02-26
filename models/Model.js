class TaskList {
    constructor(baseTaskArray = [], idGetter = Date.now) {
        this.tasks = baseTaskArray
        this.getNewId = idGetter
    }

    addTask(_title, _date) {
        this.tasks.push({title: _title, date: _date, id: this.getNewId().toString()})
    }

    changeTask(_title, _date, _id) {
        let index = this.tasks.findIndex(task => task.id === _id)
        this.tasks[index].title = _title;
        this.tasks[index].date = _date;
    }

    removeById(_id) {
        this.tasks = this.tasks.filter(task => task.id !== _id)
    }

    sortByDate() {
        this.tasks = this.tasks.sort((el1, el2) => {
            if (Date.parse(el1.date) > Date.parse(el2.date)) {
                return 1
            } else {
                return -1
            }
        })
    }
}