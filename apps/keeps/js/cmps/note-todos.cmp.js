

export default {
    template: `
    <section class="note-todo">
        <input type="text" placeholder="Label" v-model="todoList.label"/>
        <input type="text" placeholder="enter todos" v-model="todo"/>
        <button @click.prevent="addTodo(),reportVal()">+</button>
    <ul>
        <li v-for="todo in todoList.todos">
            <small>{{todo}}</small>
        </li>
    </ul>
    </section>
    `,
    data() {
        return {
            todo: '',
            todoList: {
                label: '',
                todos: []
            }
        }
    },
    methods: {
        addTodo() {
            this.todoList.todos.push(this.todo);
        },
        reportVal(){
            this.$emit('setVal',this.todoList);
        }
    }
}


// <pre>{{todoList.label}}</pre>
//             <pre>{{todo}}</pre>
//             <pre>{{todoList.todos}}</pre>