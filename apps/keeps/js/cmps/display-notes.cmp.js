

import noteTxt from './note-txt.cmp.js'
import noteImg from './note-img.cmp.js';
import noteTodos from './note-todos.cmp.js';
import noteVideo from './note-video.cmp.js';


export default{
    props:['notes'],
    template:`
    <section class="display-notes">

    <div v-for="(note, idx) in notes">
    <component :is="note.type"
                :info="note.info" 
                :note="note"
                @setVal="setAns($event, idx)" />
                </div>
    </section>
    `,
    data(){
        return{

        }
    },
    computed:{
        
    },
    components:{
        noteTxt,
        noteImg,
        noteTodos,
        noteVideo
    }
    
}



