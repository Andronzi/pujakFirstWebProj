let obj = {
    vlad: "Vlad",
    func: function() {
        console.log(this.vlad);
    }
}

obj.func()

class Test {
    constructor(name) {
        this.name = name;
    }

    doSmth = (_name) => {
        this.name = _name;
        console.log(this.name);
    }
}

let test = new Test("Vlad");
let object = test.doSmth;
object();
//console.log(test.name);

// Try other templates: Project -> New

new TaskListController(new TaskListView(), new TaskList())