
import { keepsService } from '../services/keepsService.js';

import noteTxt from './note-txt.cmp.js';
import noteImg from './note-img.cmp.js';
import noteTodos from './note-todos.cmp.js';




export default {
    props: ['notes'],
    template: `
    <section class="notes-add">

    <form @submit.prevent="save" class="notes-add-form">
        <button>Pin</button>
        <component :is="noteType" @setVal="setAns($event)" /></component>
    </form>
        <div>
            <button @click="noteType='noteTxt'">txt</button>
            <button @click="noteType='noteImg'">img</button>
            <button @click="noteType='noteTodos'">todo</button>
        </div>

    </section>
    `,
    data() {
        return {
            noteType: 'noteTxt',
            txtAns: { type: 'noteTxt', isPinned: false, info: { txt: '' } },
            imgAns: {
                type: 'noteImg',
                info: { url: '', title: '' },
                style: {
                    backgroundColor: "#0CB3C2"
                }
            },
            todoAns:{
                type:'noteTodos',
                info:{
                    label:'',
                    todos:[]
                }
            }
        }
    },
    methods: {
        save() {
            if (this.noteType === 'noteTxt') keepsService.addNewNote(this.txtAns);
            else if(this.noteType === 'noteImg') keepsService.addNewNote(this.imgAns);
            else if(this.noteType === 'noteTodos') keepsService.addNewNote(this.todoAns);
        },
        setAns(event) {
            if (this.noteType === 'noteTxt') this.txtAns.info.txt = event;
            else if (this.noteType === 'noteImg') {
                this.imgAns.info.url = event.imgUrl;
                this.imgAns.info.title = event.title;
            }
            else if(this.noteType === 'noteTodos'){
                this.todoAns.info.label = event.label;
                this.todoAns.info.todos = event.todos;
            }
        }
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

// <pre>{{txtAns}}</pre>
// <pre>{{imgAns}}</pre>
// <pre>{{todoAns}}</pre>