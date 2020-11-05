import {keepsService} from '../services/keepsService.js';
import noteDelete from '../cmps/note-delete.cmp.js';
import noteEdit from '../cmps/note-edit.cmp.js';

export default{
    props:['note'],
    template:`
    <section>

        <noteDelete v-bind:note="note"/>
        <noteEdit  v-bind:note="note" />

    </section>
    `,
    data(){
        return{
            
        }
    },
    methods:{
        
    },
    components:{
        noteDelete,
        noteEdit
    }
}
