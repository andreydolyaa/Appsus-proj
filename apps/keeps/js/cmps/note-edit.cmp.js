import {keepsService} from '../services/keepsService.js';
import noteEditModal from '../cmps/note-edit-modal.cmp.js';

export default{
    props:['note'],
    template:
    `
    <section>
        <button @click="openModal()" ><i class="fas fa-pen"></i></button>
        <noteEditModal v-if="isEditing" v-bind:note="note" @saveNote="saveNote($event)" />
    </section>
    `,data(){
        return{
            isEditing:false,
        }
    },
    methods:{
        openModal(){
            this.isEditing = true;
            
        },
        saveNote(isSaved){
            if(isSaved) this.isEditing = false;
            keepsService.editedNote(this.note.id,this.note)
            console.log('NOTE SAVED');
        },

    },
    computed:{

    },
    components:{
        noteEditModal
    },
    
}

