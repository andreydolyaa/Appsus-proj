
import {eventBus,EDIT_ON} from '../services/event-bus-service.js';
import {keepsService} from '../services/keepsService.js';
import noteEditModal from '../cmps/note-edit-modal.cmp.js';

export default{
    props:['note'],
    template:
    `
    <section>
        <button @click="openModal()" ><i class="fas fa-pen"></i></button>
        
        
        <transition name="slide-fade" mode="out-in">
            <noteEditModal v-if="isEditing" v-bind:note="note" @saveNote="saveNote($event)"/>
        </transition>
    </section>
    `,data(){
        return{
            isEditing:false,
        }
    },
    methods:{
        openModal(){
            this.isEditing = true;
            eventBus.$emit(EDIT_ON, this.isEditing);
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

