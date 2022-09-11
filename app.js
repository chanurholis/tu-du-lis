const { createApp }  = Vue;

const app = createApp({
    data() {
        let id = 1;
        return {
            todos: [
                { id: id++, name: "Learn Vue.js", desc: "lorem ipsum", isDone: false },
                { id: id++, name: "Learn React.js", desc: "lorem ipsum", isDone: true },
            ]
        }
    },
    methods: {
        addTodo() {
            console.log('adding todo...');
        },
        removeTodo() {
            console.log('removing todo...');
        },
        editTodo() {
            console.log('aditing todo...');
        },
        updateTodo() {
            console.log('updating todo...');
        },
        removeTodo() {
            console.log('removing todo...');
        },
    }
});

app.mount('#app');