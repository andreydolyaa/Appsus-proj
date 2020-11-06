import noteEditingBar from '../cmps/note-editing-bar.cmp.js';

export default{
    props:['note'],
    template:`
    <section class="note-todos-display" :style="{'background-color':note.style.backgroundColor}">
        <h1>{{note.info.label}}</h1>
        <ul>
            <li v-for="todo in note.info.todos" :class="{done:todo.doneAt===true}" >
            <p>{{todo.txt}}</p>
            <input type="checkbox" v-model="todo.doneAt" @click="todo.doneAt = !todo.doneAt" >
            </li>
        </ul>
        <noteEditingBar v-bind:note="note"/>
    </section>
    `,
    data(){
        return{
            
        }
    },
    methods:{

    },
    components:{
        noteEditingBar
    }
}


