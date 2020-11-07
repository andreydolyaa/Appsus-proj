
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
                :note="note" />
                </div>
    </section>
    `,
    data() {
        return {
            
        }
    },
    methods:{

    },
    computed: {
    },
    components: {
        noteTxt,
        noteImg,
        noteTodos,
        noteVideo,
    },
    created(){
            
    }

}


// this.emailData = this.$route.query;

// this.emailData.info.txt = this.$route.query.body;
// console.log(this.emailData);
// console.log('this.$route.query',this.$route.query)
// console.log(this.emailDataBody);
//         console.log(this.emailDataTitle);
//         this.emailData.info.txt = this.emailDataBody;
//         console.log(this.emailData.info.txt);