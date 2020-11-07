
import {keepsService} from '../services/keepsService.js';
import noteTxt from './note-txt.cmp.js'
import noteImg from './note-img.cmp.js';
import noteTodos from './note-todos.cmp.js';
import noteVideo from './note-video.cmp.js';
import noteSearch from '../cmps/note-search.cmp.js';


export default {
    props: ['notes'],
    template: `
    <section class="display-notes" >

    <noteSearch :notes="notes" @filter="filterNotes($event)"/>

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
            filtredNotes:null
        }
    },
    methods:{
        filterNotes(word){
            this.filtredNotes = keepsService.searchNotes(word);
            console.log(this.filtredNotes);
            console.log(word);
        }
    },
    computed: {
    },
    components: {
        noteTxt,
        noteImg,
        noteTodos,
        noteVideo,
        noteSearch
    }

}



