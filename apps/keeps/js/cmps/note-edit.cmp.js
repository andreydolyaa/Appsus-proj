import {keepsService} from '../services/keepsService.js';
import noteEditModal from '../cmps/note-edit-modal.cmp.js';

export default{
    props:['note'],
    template:
    `
    <section>
        <button @click="openModal()"><i class="fas fa-pen"></i></button>
        <noteEditModal v-if="isEditing" v-bind:note="note" @saveNote="saveNote($event)" />
    </section>
    `,data(){
        return{
            isEditing:false,
            noteId: this.note.id, 
        }
    },
    methods:{
        openModal(){
            this.isEditing = true;
            
        },
        saveNote(isSaved){
            if(isSaved) this.isEditing = false;
            keepsService.editedNote(this.noteId,this.note)
            console.log('NOTE SAVED');
        }
    },
    computed:{

    },
    components:{
        noteEditModal
    },
    
}



// saveNote(isSaved){
//     if(isSaved) this.isEditing = false;
//     keepsService.editedNote(this.noteId,this.note)
//     .then(note => {
//         this.note = note;
//     })
// }