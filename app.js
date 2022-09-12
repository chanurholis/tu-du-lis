const { createApp }  = Vue;

createApp({    
    data() {
        return {
            todoName: '',
            todoDesc: '',
            todos: eval(localStorage.getItem('todos'))
        }
    },
    methods: {
        addTodo() {
            const payload = {
                name: this.todoName,
                desc: this.todoDesc,
                isDone: false
            }
            this.todos.push(payload);
            const data = JSON.stringify(this.todos);
            localStorage.setItem('todos', data);
        },
        removeTodo(todo) {
            this.todos.filter((t) => {
                console.log(t); 
            });
            // this.todos = this.todos.filter((t) => t != todo);
        },
        editTodo() {
            console.log('aditing todo...');
        },
        updateTodo() {
            console.log('updating todo...');
        },
    }
}).mount('#app');