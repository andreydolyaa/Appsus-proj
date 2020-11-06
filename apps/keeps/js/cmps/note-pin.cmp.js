import { keepsService } from '../services/keepsService.js';

export default {
    props: ['note'],
    template: `
    <section class="note-color">
        <button @click="pinNote(note.id)">
            <i class="fas fa-thumbtack"></i>
        </i></button>
    </section>
    `,
    data() {
        return {

        }
    },
    methods: {
        pinNote(noteId) {
            keepsService.placeNoteOnTop(noteId);
        },
    },
}