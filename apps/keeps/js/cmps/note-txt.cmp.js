import noteEdit from '../cmps/note-edit.cmp.js';

export default{
    props:['note'],
    template:`
    <section class="note-txt-display">
        <h1>{{note.info.txt}}</h1>
       <noteEdit v-bind:note="note"/>
    </section>
    `,
    components:{
        noteEdit
    }
}


// editNote(val){
//     console.log(val);
// },
// <button @click="editNote(note.id)"><i class="fas fa-pen"></i></button>
// <button @click="deleteNote(note.id)"><i class="far fa-trash-alt"></i></button>