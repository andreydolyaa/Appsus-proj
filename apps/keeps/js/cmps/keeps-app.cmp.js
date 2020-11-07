import { keepsService } from '../services/keepsService.js';
import { eventBus, EDIT_ON } from '../services/event-bus-service.js';
import noteAdd from './note-add.cmp.js';
import displayNotes from './display-notes.cmp.js';



export default {
    template: `
    <section class="keeps-app" :class="{blur:isEditing}">

        <div class="focus-modal"></div>
        
        <div class="keeps-app-container">
            <noteAdd :notes="notes"/>
            <display-notes v-bind:notes="notes"/>
        </div>
        
    </section>
    `,
    data() {
        return {
            isEditing:false,
            notes: null,
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
        
    }
}

// :class="{blur:isEditing}"