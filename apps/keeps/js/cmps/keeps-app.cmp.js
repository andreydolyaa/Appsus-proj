import { keepsService } from '../services/keepsService.js';
import { eventBus, EDIT_ON } from '../services/event-bus-service.js';
import noteAdd from './note-add.cmp.js';
import displayNotes from './display-notes.cmp.js';
import noteSearch from '../cmps/note-search.cmp.js';



export default {
    template: `
    <section class="keeps-app" :class="{blur:isEditing}">

        <div class="focus-modal"></div>

        
        <div class="keeps-app-container">
        <noteAdd :notes="notes"/>
        <noteSearch :notes="notes" @filter="filterNotes($event)" />
            <display-notes v-bind:notes="notes" :filtredNotes="filtredNotes"/>
        </div>
        
    </section>
    `,
    data() {
        return {
            isEditing:false,
            notes: null,
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
    created() {
        keepsService.getNotes()
            .then(notes => {
                this.notes = notes
            });

        eventBus.$on(EDIT_ON, (ans) => {
            if (ans === true) this.isEditing = true;
            else this.isEditing = false;
        });

    },
    components: {
        noteAdd,
        displayNotes,
        noteSearch
    }
}

