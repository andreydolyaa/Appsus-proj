import noteEdit from '../cmps/note-edit.cmp.js';

export default{
    props:['note'],
    template:`
    <section class="note-todos-display">
        <h1>{{note.info.label}}</h1>
        <ul>
            <li v-for="todo in note.info.todos">
                {{todo.txt}}
            </li>
        </ul>
        <noteEdit v-bind:note="note"/>
    </section>
    `,
    components:{
        noteEdit
    }
}


