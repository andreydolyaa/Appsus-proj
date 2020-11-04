import noteTxt from './note-txt.cmp.js';
import noteImg from './note-img.cmp.js';
import noteTodos from './note-todos.cmp.js';




export default {
    props: ['notes'],
    template: `
    <section class="note-type">

        <h1>note type</h1>

        <div>
            <button @click="noteType='noteTxt'">txt</button>
            <button @click="noteType='noteImg'">img</button>
            <button @click="noteType='noteTodos'">todo</button>
        </div>

        <form @submit.prevent="save">
            <component :is="noteType" @setVal="setAns(val)" /></component>
            <button>Save</button>
        </form>

    </section>
    `,
    data(){
        return{
            noteType:'noteTxt'
        }
    },
    methods: {
        save() {
            
        },
        
    },
    components: {
        noteTxt,
        noteImg,
        noteTodos
    }
}



// <form @submit.prevent="save">
//             <div v-for="note in notes">
//                 <component :is="note.type"
//                             :note="note.info" 
//                             @setVal="setAns($event, idx)" />
//                 </component>
//             </div>
//             <button>Save</button>
//         </form>