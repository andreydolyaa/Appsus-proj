import { keepsService } from '../services/keepsService.js';
// import selectType from '../cmps/select-type.cmp.js';
// import noteTxt from '../cmps/note-txt.cmp.js';
// import noteImg from '../cmps/note-img.cmp.js';
import noteAdd from './note-add.cmp.js';


export default {
    template: `
    <section>
        <h1>KEEPSsss</h1>
        <noteAdd :notes="notes"/>
    </section>
    `,
    data() {
        return {
            notes: null,
        }
    },
    created() {
        keepsService.getNotes()
            .then(notes => {
                this.notes = notes
            });
    },
    components:{
        noteAdd
    }
}