import {keepsService} from '../services/keepsService.js';

export default{
    props:['note'],
    template:
    `
    <section>
    <button @click="deleteNote()"><i class="far fa-trash-alt"></i></button>
    <button @click="editNote()"><i class="fas fa-pen"></i></button>
    </section>
    `,data(){
        return{
            noteId: this.note.id
        }
    },
    methods:{
        deleteNote(){
            keepsService.deleteNote(this.noteId);
        },
        editNote(){
            console.log(this.noteId);
        }
    }
}