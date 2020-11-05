import {keepsService} from '../services/keepsService.js';

export default{
    props:['note'],
    template:
    `
    <section>
        <button @click="deleteNote(note.id)"><i class="far fa-trash-alt"></i></button>

    </section>
    `,data(){
        return{
            
        }
    },
    methods:{
        deleteNote(noteId){
            keepsService.deleteNote(noteId);
            console.log(noteId);
        },
    },
}
