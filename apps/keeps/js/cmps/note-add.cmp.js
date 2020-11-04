
import {keepsService} from '../services/keepsService.js';

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
            <component :is="noteType" @setVal="setAns($event)" /></component>
            <button>Pin</button>
        </form>
        <pre>{{txtAns}}</pre>
        <pre>{{imgAns}}</pre>
    </section>
    `,
    data(){
        return{
            noteType:'noteTxt',
            txtAns: {type:'noteTxt',isPinned:false,info:{txt:''}},
            imgAns:{
                type:'noteImg',
                info:{url:'',title:''},
                style:{
                    backgroundColor:"#0CB3C2"
                }
            }
        }
    },
    methods: {
        save() {
            keepsService.addNewNote(this.txtAns);
        },
        setAns(event){
            if(this.noteType === 'noteTxt') this.txtAns.info.txt = event;
            else if(this.noteType === 'noteImg') {
                this.imgAns.info.url = event.imgUrl;
                this.imgAns.info.title = event.title;
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