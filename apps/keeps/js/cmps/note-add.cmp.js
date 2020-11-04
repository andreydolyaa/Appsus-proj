
import { keepsService } from '../services/keepsService.js';

import noteTxt from './note-txt.cmp.js';
import noteImg from './note-img.cmp.js';
import noteTodos from './note-todos.cmp.js';
import noteVideo from './note-video.cmp.js';




export default {
    props: ['notes'],
    template: `
    <section class="notes-add">
    
    <div class="form">
    <form @submit.prevent="save">
    <component :is="noteType" @setVal="setAns($event)" /></component>
    </form>
    </div>
    
    
    <div class="btns">
    <button class="note-add-btn"><i class="far fa-check-square" @click="save()"></i></button>
            <button class="note-add-btn" @click="noteType='noteTxt'"><i class="fas fa-font"></i></button>
            <button class="note-add-btn" @click="noteType='noteImg'"><i class="far fa-image"></i></button>
            <button class="note-add-btn" @click="noteType='noteTodos'"><i class="fas fa-list-ul"></i></button>

            <button class="note-add-btn" @click="noteType='noteVideo'"><i class="fas fa-video"></i></button>
        </div>

    </section>
    `,
    data() {
        return {
            noteType: 'noteTxt',
            txtAns: { type: 'noteTxt',display:'noteTxtDisplay', isPinned: false, info: { txt: '' } },
            imgAns: {
                type: 'noteImg',
                display:'noteImgDisplay',
                info: { url: '', title: '' },
                style: {
                    backgroundColor: "#0CB3C2"
                }
            },
            todoAns:{
                type:'noteTodos',
                display:'noteTodosDisplay',
                info:{
                    label:'',
                    todos:[]
                }
            },
            videoAns:{
                type:'noteVideo',
                display:'noteVideoDisplay',
                info:{
                    title:'',
                    url:''
                }
            }
        }
    },
    methods: {
        save() {
            if (this.noteType === 'noteTxt') keepsService.addNewNote(this.txtAns);
            else if(this.noteType === 'noteImg') keepsService.addNewNote(this.imgAns);
            else if(this.noteType === 'noteTodos') keepsService.addNewNote(this.todoAns);
            else if(this.noteType === 'noteVideo') keepsService.addNewNote(this.videoAns);
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
            else if(this.noteType === 'noteVideo'){
                this.videoAns.info.title = event.title;
                this.videoAns.info.url = event.url;
            }
        }
    },
    components: {
        noteTxt,
        noteImg,
        noteTodos,
        noteVideo
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