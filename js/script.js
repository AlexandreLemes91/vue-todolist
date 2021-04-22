const app = new Vue({
    el: "#app",
        
    data: {
        todos: [
            {
                text: "Mission 1",
                cleared: false,
            },{
                text: "Mission 2",
                cleared: false,
            },{
                text: "Mission 3",
                cleared: false,
            }
        ],
        newToDo: "",
    },
    methods: {
        addToDo(){
            if(this.newToDo !== ""){
                this.todos.push({
                    text: this.newToDo,
                    cleread: false,
                })
            }

        }
    }
})