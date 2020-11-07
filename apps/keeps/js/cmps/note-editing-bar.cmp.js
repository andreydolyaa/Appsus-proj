import {keepsService} from '../services/keepsService.js';
import noteDelete from '../cmps/note-delete.cmp.js';
import noteEdit from '../cmps/note-edit.cmp.js';
import noteColor from './note-color.cmp.js';
import notePin from '../cmps/note-pin.cmp.js';
import noteSendEmail from '../cmps/note-send-email.cmp.js';

export default{
    props:['note'],
    template:`
    <section class="note-editing-bar">
        
        <notePin v-bind:note="note" />
        <noteDelete v-bind:note="note"/>
        <noteEdit  v-bind:note="note" />
        <noteColor v-bind:note="note"/>
        <noteSendEmail :note="note"/>

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
        noteEdit,
        noteColor,
        notePin,
        noteSendEmail
    }
}
