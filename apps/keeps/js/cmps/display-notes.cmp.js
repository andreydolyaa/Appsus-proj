
import {keepsService} from '../services/keepsService.js';
import noteTxt from './note-txt.cmp.js'
import noteImg from './note-img.cmp.js';
import noteTodos from './note-todos.cmp.js';
import noteVideo from './note-video.cmp.js';



export default {
    props: ['notes','filtredNotes'],
    template: `
    <section class="display-notes" >

    

    <div v-if="filtredNotes" v-for="(note, idx) in filtredNotes" >
    <component :is="note.type"
                :info="note.info" 
                :note="note"/>
                </div>



    <div v-if="!filtredNotes" v-for="(note, idx) in notes" class="notes-dynamic-cmp">
    <component :is="note.type"
                :info="note.info" 
                :note="note"/>
                </div>
    </section>
    `,
    data() {
        return {
            
        }
    },
    
    computed: {

    },
    components: {
        noteTxt,
        noteImg,
        noteTodos,
        noteVideo,
    }

}
