import noteTxtDisplay from './notes/note-txt-display.cmp.js';
import noteImgDisplay from './notes/note-img-display.cmp.js';
import noteTodosDisplay from './notes/note-todos-display.cmp.js';

export default{
    props:['notes'],
    template:`
    <section>

    <div v-for="(note, idx) in notes">
    <component :is="note.display"
                :info="note.info" 
                :note="note"
                @setVal="setAns($event, idx)" />

                </div>
        
{{notes}}
    </section>
    `,
    data(){
        return{
            // type:null,
        }
    },
    computed:{
        
    },
    components:{
        noteTxtDisplay,
        noteImgDisplay,
        noteTodosDisplay
    }
    
}



// <div v-for="(note, idx) in notes">
//                 <component :is="note.type"
//                             :info="note.info" 
//                             :note="note"
//                             @setVal="setAns($event, idx)" />

//             </div>